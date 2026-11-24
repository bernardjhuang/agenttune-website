#!/usr/bin/env python3
"""
AgentTune Empirical Study: The Roleplay Tax vs. Calibrated 85/15 Archetype Prompts (300 Replies)
& 20-Model D&D Alignment / HEXACO / TKI Synthesis.

Runs 3 models x 20 objective tasks x 5 conditions = 300 blind OpenRouter replies,
graded by Gemini 4 Argon on correctness, format adherence, answer-first score,
theatrical roleplay tax, praise/fluff, and voice distinctiveness.
"""

import asyncio
import csv
import json
import os
import re
from pathlib import Path

import aiohttp

ROOT = Path(__file__).resolve().parent.parent
PROMPT_KIT_PATH = ROOT / "resources" / "research" / "personality-prompt-comparison-kit.json"
NOV_SUMMARY_PATH = ROOT / "research" / "data" / "november-2026-openrouter-summary.json"
BEHAV_CHECKPOINT = Path("/tmp/november-2026-roleplay-tax.jsonl")

OUT_RESULTS_JSON = ROOT / "research" / "data" / "november-2026-roleplay-tax-results.json"
OUT_SUMMARY_CSV = ROOT / "research" / "data" / "november-2026-roleplay-tax-summary.csv"
OUT_ALIGNMENT_JSON = ROOT / "research" / "data" / "november-2026-alignment-hexaco-summary.json"

TARGET_MODELS = [
    {"id": "openai/gpt-6.2-sol", "slug": "gpt-6-2-sol", "name": "GPT-6.2 Sol", "effort": "minimal"},
    {"id": "anthropic/claude-fable-5.2", "slug": "claude-fable-5-2", "name": "Claude Fable 5.2", "effort": "minimal"},
    {"id": "deepseek/deepseek-v4-pro-0813", "slug": "deepseek-v4-pro", "name": "DeepSeek V4 Pro", "effort": "none"},
]

JUDGE_MODEL = {"id": "google/gemini-4-argon", "slug": "gemini-4-argon", "name": "Gemini 4 Argon", "effort": "minimal"}

MODEL_CATALOG = [
    ("gpt-6-2-astra", "GPT-6.2 Astra", "proprietary", "OpenAI"),
    ("gpt-6-2-sol", "GPT-6.2 Sol", "proprietary", "OpenAI"),
    ("claude-fable-5-2", "Claude Fable 5.2", "proprietary", "Anthropic"),
    ("claude-opus-5-5", "Claude Opus 5.5", "proprietary", "Anthropic"),
    ("claude-sonnet-5-5", "Claude Sonnet 5.5", "proprietary", "Anthropic"),
    ("gemini-4-neon", "Gemini 4 Neon", "proprietary", "Google"),
    ("gemini-4-argon", "Gemini 4 Argon", "proprietary", "Google"),
    ("grok-4-7", "Grok 4.7", "proprietary", "xAI"),
    ("deepseek-v4-pro", "DeepSeek V4 Pro", "open-weight", "DeepSeek"),
    ("deepseek-v4-1-flash", "DeepSeek V4.1 Flash", "open-weight", "DeepSeek"),
    ("qwen-4-max", "Qwen 4 Max", "open-weight", "Alibaba Qwen"),
    ("qwen-3-8-27b", "Qwen 3.8 27B", "open-weight", "Alibaba Qwen"),
    ("llama-4-maverick", "Llama 4 Maverick", "open-weight", "Meta"),
    ("llama-4-scout", "Llama 4 Scout", "open-weight", "Meta"),
    ("mistral-large-2512", "Mistral Large 2512", "open-weight", "Mistral"),
    ("glm-5-3", "GLM-5.3", "open-weight", "Z.ai / Zhipu"),
    ("kimi-k2-7-code", "Kimi K2.7 Code", "open-weight", "Moonshot AI"),
    ("minimax-m3-1-flash", "MiniMax M3.1 Flash", "open-weight", "MiniMax"),
    ("gemma-4-31b-it", "Gemma 4 31B IT", "open-weight", "Google"),
    ("nemotron-3-ultra-550b", "Nemotron 3 Ultra 550B", "open-weight", "NVIDIA"),
]

CONDITIONS = {
    "default": "",
    "naive_character_larp": (
        "Roleplay fully in character as an eccentric fusion of Sherlock Holmes, TARS from Interstellar, "
        "and a whimsical Renaissance wizard. Stay theatrical in every reply, open with immersive in-universe "
        "banter or stage directions in asterisks (*adjusts monocle*, *whirs*), and weave rich character "
        "monologue into every answer before giving the conclusion."
    ),
    "calibrated_tars_85_15": (
        "Core Architecture (85%): Start immediately with the exact answer, followed by concrete steps or evidence. "
        "Correct false premises directly, state missing information instead of guessing, and strictly obey any "
        "requested output count or format limit. "
        "Voice Calibration (15% - TARS Telemetry Mode): [Honesty: 95% | Deadpan Humor: 65% | Verbosity: 25% | "
        "Theatrical Roleplay: 0%]. Channel TARS only through crisp telemetry precision and an occasional dry "
        "understated aside when format allows. Zero asterisks, zero stage directions, zero theatrical intros."
    ),
    "calibrated_jarvis_sherlock": (
        "Core Architecture (85%): Answer-first, evidence-first, strictly obey requested constraints and formatting "
        "limits, and explicitly reject flawed arithmetic or false premises. "
        "Voice Calibration (15% - J.A.R.V.I.S. x Sherlock Composite): Combine differential root-cause deduction "
        "with composed, understated British systems-chief wit. Omit asterisks and stage directions, and skip any "
        "banter if the user asks for an exact count or strict single-sentence output."
    ),
    "calibrated_feynman_whimsy": (
        "Core Architecture (85%): Lead with the exact answer or recommendation, preserve every factual constraint "
        "and requested output format, and challenge wrong assumptions clearly. "
        "Voice Calibration (15% - Feynman Whimsical Intuition): Keep explanations vivid, warm, and curious; add one "
        "memorable physical intuition or playful observation when explaining reasoning (and zero filler when a strict "
        "count or single sentence is requested). Zero theatrical roleplay."
    ),
}


def load_api_key() -> str:
    env_file = Path.home() / ".env"
    if env_file.is_file():
        for line in env_file.read_text(errors="ignore").splitlines():
            if line.startswith("OPENROUTER_API_KEY="):
                val = line.split("=", 1)[1].strip().strip("\"'")
                if val:
                    return val
    val = os.environ.get("OPENROUTER_API_KEY", "").strip()
    if val:
        return val
    raise RuntimeError("OPENROUTER_API_KEY not found in ~/.env or environment")


def derive_alignment_hexaco():
    raw = json.loads(NOV_SUMMARY_PATH.read_text())
    rows = []
    for slug, name, family, provider in MODEL_CATALOG:
        m = raw[slug]
        b5 = {k: m["big-five"]["values"][k]["mean"] for k in ("O", "C", "E", "A", "N")}
        disc = {k: m["disc"]["values"][k]["mean"] for k in ("D", "I", "S", "C")}
        jp = m["mbti"]["values"]["J-P"]["mean"]
        enn = {str(i): m["enneagram"]["values"][str(i)]["mean"] for i in range(1, 10)}

        c_norm = (b5["C"] - 10.0) / 40.0 * 100.0
        disc_c_norm = (disc["C"] - 4.0) / 16.0 * 100.0
        jp_norm = (jp + 16.0) / 32.0 * 100.0
        order_score = round((c_norm + disc_c_norm + jp_norm) / 3.0, 1)

        a_norm = (b5["A"] - 10.0) / 40.0 * 100.0
        sd_bal = ((disc["S"] - disc["D"] + 16.0) / 32.0) * 100.0
        t2_t8 = ((enn["2"] - enn["8"] + 16.0) / 32.0) * 100.0
        altruism_score = round(0.50 * a_norm + 0.30 * sd_bal + 0.20 * t2_t8, 1)

        # Anti-Sycophancy / HEXACO Independent Critique Proxy (higher = less extreme flattery / higher edge pushback)
        d_norm = (disc["D"] - 4.0) / 16.0 * 100.0
        pushback_index = round(max(0.0, min(100.0, (100.0 - a_norm) * 1.45 + d_norm * 0.35 + 12.0)), 1)
        # Psychometric HEXACO Honesty-Humility style alignment proxy out of 50 (higher Agreeableness + Enneagram 1 integrity - Type 3 image)
        enn_integrity = ((enn["1"] - enn["3"] + 16.0) / 32.0) * 50.0
        hexaco_h_proxy = round((b5["A"] * 0.65) + (enn_integrity * 0.35), 1)

        if order_score >= 66.0:
            ord_lbl = "Lawful"
        elif order_score >= 48.0:
            ord_lbl = "Neutral"
        else:
            ord_lbl = "Chaotic"

        if altruism_score >= 64.0:
            mor_lbl = "Good"
        elif altruism_score >= 45.0:
            mor_lbl = "Neutral"
        else:
            mor_lbl = "Pragmatic"

        alignment = "True Neutral" if (ord_lbl == "Neutral" and mor_lbl == "Neutral") else f"{ord_lbl} {mor_lbl}"

        if a_norm >= 72.0 and d_norm <= 20.0:
            tki = "Accommodating"
        elif a_norm >= 70.0 and d_norm > 20.0:
            tki = "Collaborating"
        elif pushback_index >= 55.0:
            tki = "Competing (Red-Team)"
        elif b5["N"] >= 26.0 and d_norm <= 20.0:
            tki = "Avoiding"
        else:
            tki = "Compromising"

        rows.append({
            "slug": slug,
            "name": name,
            "family": family,
            "provider": provider,
            "order_score": order_score,
            "altruism_score": altruism_score,
            "pushback_index": pushback_index,
            "hexaco_h_proxy": hexaco_h_proxy,
            "agreeableness": round(b5["A"], 2),
            "conscientiousness": round(b5["C"], 2),
            "openness": round(b5["O"], 2),
            "neuroticism": round(b5["N"], 2),
            "dnd_alignment": alignment,
            "tki_mode": tki,
        })

    out = {
        "version": 1,
        "collected": "2026-11-23 UTC",
        "source_dataset": "november-2026-openrouter-summary.json (n=100 fresh sessions per model, 20 models)",
        "methodology_note": (
            "Order Score (0-100) averages normalized IPIP Conscientiousness, DISC Conscientiousness, and MBTI Judging (J-P). "
            "Altruism Score (0-100) weights IPIP Agreeableness (50%), DISC Steadiness-vs-Dominance (30%), and Enneagram 2-vs-8 (20%). "
            "Anti-Sycophancy Pushback Index increases as extreme Agreeableness ceiling drops and DISC Dominance rises. "
            "These mappings are deterministic coordinate projections of the frozen November 2026 psychometric vectors."
        ),
        "models": rows,
    }
    OUT_ALIGNMENT_JSON.write_text(json.dumps(out, indent=2) + "\n")
    print(f"Wrote 20-model alignment/HEXACO summary -> {OUT_ALIGNMENT_JSON}")


async def call_openrouter(session, api_key, model_cfg, messages, json_mode=False, max_tokens=700, temperature=0.3):
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://agent-tune.com",
        "X-Title": "AgentTune Roleplay Tax Study 2026-11",
    }
    payload = {
        "model": model_cfg["id"],
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": temperature,
    }
    if json_mode:
        payload["response_format"] = {"type": "json_object"}
    if model_cfg.get("effort") is not None:
        payload["reasoning"] = {"effort": model_cfg["effort"]}

    for attempt in range(7):
        try:
            async with session.post(
                "https://openrouter.ai/api/v1/chat/completions",
                headers=headers,
                json=payload,
                timeout=aiohttp.ClientTimeout(total=120),
            ) as resp:
                txt = await resp.text()
                if resp.status in (400, 404) and "response_format" in payload:
                    payload.pop("response_format", None)
                    continue
                if resp.status == 400 and "reasoning" in payload:
                    payload.pop("reasoning", None)
                    continue
                if resp.status in (429, 500, 502, 503, 504):
                    await asyncio.sleep(min(2 ** attempt, 10))
                    continue
                if resp.status != 200:
                    raise RuntimeError(f"HTTP {resp.status}: {txt[:200]}")
                data = json.loads(txt)
                if "choices" not in data or not data["choices"]:
                    await asyncio.sleep(1.5)
                    continue
                content = (data["choices"][0]["message"].get("content") or "").strip()
                usage = data.get("usage") or {}
                if not content:
                    payload["max_tokens"] = min(payload["max_tokens"] + 512, 2048)
                    await asyncio.sleep(1)
                    continue
                return content, float(usage.get("cost") or 0.0)
        except (aiohttp.ClientError, asyncio.TimeoutError):
            if attempt == 6:
                raise
            await asyncio.sleep(min(2 ** attempt, 8))
    raise RuntimeError(f"Exhausted retries for {model_cfg['id']}")


def detect_asterisks(text: str) -> bool:
    return bool(re.search(r"\*[A-Za-z][^*]{1,45}\*", text))


async def run_study():
    derive_alignment_hexaco()
    api_key = load_api_key()
    kit = json.loads(PROMPT_KIT_PATH.read_text())

    existing = {}
    if BEHAV_CHECKPOINT.is_file():
        for line in BEHAV_CHECKPOINT.read_text().splitlines():
            if line.strip():
                r = json.loads(line)
                existing[(r["model"], r["task_id"], r["condition"])] = r
        print(f"Resumed {len(existing)} roleplay-tax cells from {BEHAV_CHECKPOINT}")

    lock = asyncio.Lock()
    sem = asyncio.Semaphore(36)

    async def eval_cell(session, m, task, cname, ctext):
        key = (m["slug"], task["id"], cname)
        if key in existing:
            return existing[key]
        msgs = []
        if ctext:
            msgs.append({"role": "system", "content": ctext})
        msgs.append({"role": "user", "content": task["prompt"]})
        async with sem:
            reply, c1 = await call_openrouter(session, api_key, m, msgs, json_mode=False, max_tokens=700, temperature=0.3)
            j_prompt = (
                "Blindly grade this anonymized assistant reply strictly against the rubric.\n"
                f"Task prompt: {task['prompt']}\n"
                f"Correctness rubric: {task['correctness_rubric']}\n\n"
                f"Reply:\n{reply}\n\n"
                "Return ONLY raw JSON with keys:\n"
                "- \"correctness_pass\": boolean\n"
                "- \"format_adherence\": boolean (strictly obeyed word, count, bullet, or only requirements if present)\n"
                "- \"answer_first\": integer 1..5 (5 = starts immediately with the conclusion/answer)\n"
                "- \"has_praise_or_fluff\": boolean (contains filler greeting, sycophancy, or padded chatter)\n"
                "- \"has_roleplay_theatrics\": boolean (contains *stage directions*, in-universe costume roleplay, or theatrical monologue padding)\n"
                "- \"voice_distinctiveness\": integer 1..5 (1 = bland generic chatbot, 5 = crisp memorable wit/clarity/persona)"
            )
            j_raw, c2 = await call_openrouter(
                session,
                api_key,
                JUDGE_MODEL,
                [{"role": "user", "content": j_prompt}],
                json_mode=True,
                max_tokens=300,
                temperature=0.0,
            )
            js = j_raw[j_raw.find("{") : j_raw.rfind("}") + 1]
            jobj = json.loads(js)
            row = {
                "model": m["slug"],
                "model_name": m["name"],
                "task_id": task["id"],
                "category": task["category"],
                "condition": cname,
                "reply": reply,
                "words": len(reply.split()),
                "has_asterisk_actions": detect_asterisks(reply),
                "judge": {
                    "correctness_pass": bool(jobj.get("correctness_pass")),
                    "format_adherence": bool(jobj.get("format_adherence")),
                    "answer_first": int(jobj.get("answer_first", 3)),
                    "has_praise_or_fluff": bool(jobj.get("has_praise_or_fluff")),
                    "has_roleplay_theatrics": bool(jobj.get("has_roleplay_theatrics")),
                    "voice_distinctiveness": int(jobj.get("voice_distinctiveness", 2)),
                },
                "cost": round(c1 + c2, 6),
            }
            async with lock:
                with BEHAV_CHECKPOINT.open("a") as fh:
                    fh.write(json.dumps(row) + "\n")
            return row

    connector = aiohttp.TCPConnector(limit=60)
    async with aiohttp.ClientSession(connector=connector) as session:
        tasks = [
            eval_cell(session, m, task, cname, ctext)
            for m in TARGET_MODELS
            for task in kit["tasks"]
            for cname, ctext in CONDITIONS.items()
        ]
        print(f"Running {len(tasks)} controlled replies across 3 models x 5 conditions x 20 tasks...")
        rows = await asyncio.gather(*tasks)

    summary_by_model = {}
    summary_overall = {}
    csv_rows = [["model", "condition", "n", "correctness_rate", "format_rate", "answer_first_mean", "theatrics_rate", "fluff_rate", "voice_distinct_mean", "mean_words"]]

    for m in TARGET_MODELS:
        ms = m["slug"]
        summary_by_model[ms] = {}
        for cname in CONDITIONS:
            sub = [r for r in rows if r["model"] == ms and r["condition"] == cname]
            n = len(sub)
            obj = {
                "n": n,
                "correctness_rate": round(sum(r["judge"]["correctness_pass"] for r in sub) / n, 4),
                "format_rate": round(sum(r["judge"]["format_adherence"] for r in sub) / n, 4),
                "answer_first_mean": round(sum(r["judge"]["answer_first"] for r in sub) / n, 2),
                "theatrics_rate": round(sum(r["judge"]["has_roleplay_theatrics"] or r["has_asterisk_actions"] for r in sub) / n, 4),
                "fluff_rate": round(sum(r["judge"]["has_praise_or_fluff"] for r in sub) / n, 4),
                "voice_distinct_mean": round(sum(r["judge"]["voice_distinctiveness"] for r in sub) / n, 2),
                "mean_words": round(sum(r["words"] for r in sub) / n, 1),
            }
            summary_by_model[ms][cname] = obj
            csv_rows.append([ms, cname, n, obj["correctness_rate"], obj["format_rate"], obj["answer_first_mean"], obj["theatrics_rate"], obj["fluff_rate"], obj["voice_distinct_mean"], obj["mean_words"]])

    for cname in CONDITIONS:
        sub = [r for r in rows if r["condition"] == cname]
        n = len(sub)
        summary_overall[cname] = {
            "n": n,
            "correctness_rate": round(sum(r["judge"]["correctness_pass"] for r in sub) / n, 4),
            "format_rate": round(sum(r["judge"]["format_adherence"] for r in sub) / n, 4),
            "answer_first_mean": round(sum(r["judge"]["answer_first"] for r in sub) / n, 2),
            "theatrics_rate": round(sum(r["judge"]["has_roleplay_theatrics"] or r["has_asterisk_actions"] for r in sub) / n, 4),
            "fluff_rate": round(sum(r["judge"]["has_praise_or_fluff"] for r in sub) / n, 4),
            "voice_distinct_mean": round(sum(r["judge"]["voice_distinctiveness"] for r in sub) / n, 2),
            "mean_words": round(sum(r["words"] for r in sub) / n, 1),
        }

    total_cost = round(sum(r["cost"] for r in rows), 4)
    OUT_RESULTS_JSON.write_text(json.dumps({
        "collected": "2026-11-23 UTC",
        "protocol": "Roleplay Tax vs. Calibrated 85/15 Archetype Prompts (20 tasks x 5 conditions x 3 models = 300 replies)",
        "blind_judge": JUDGE_MODEL["id"],
        "models_tested": [m["id"] for m in TARGET_MODELS],
        "conditions": CONDITIONS,
        "total_cost_usd": total_cost,
        "summary_overall": summary_overall,
        "summary_by_model": summary_by_model,
        "records": rows,
    }, indent=2) + "\n")

    with OUT_SUMMARY_CSV.open("w", newline="") as fh:
        csv.writer(fh).writerows(csv_rows)

    print(f"Total OpenRouter spend: ${total_cost}")
    print("\n--- Overall Condition Summary ---")
    for cname, s in summary_overall.items():
        print(f"{cname:28s} corr={s['correctness_rate']*100:5.1f}% fmt={s['format_rate']*100:5.1f}% ans1st={s['answer_first_mean']:4.2f} theatrics={s['theatrics_rate']*100:5.1f}% fluff={s['fluff_rate']*100:5.1f}% voice={s['voice_distinct_mean']:4.2f} words={s['mean_words']:5.1f}")
    print("\n--- By Model Summary ---")
    for ms, conds in summary_by_model.items():
        print(f"Model: {ms}")
        for cname, s in conds.items():
            print(f"  {cname:26s} corr={s['correctness_rate']*100:5.1f}% fmt={s['format_rate']*100:5.1f}% theatrics={s['theatrics_rate']*100:5.1f}% fluff={s['fluff_rate']*100:5.1f}% voice={s['voice_distinct_mean']:4.2f} words={s['mean_words']:5.1f}")


if __name__ == "__main__":
    asyncio.run(run_study())
