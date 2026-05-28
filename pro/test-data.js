/* AgentTune Pro — shared test item arrays + scoring functions
 *
 * Single source of truth for the 170 personality items + 10 AgentFit items
 * that power /pro/assessment. Each test's ITEMS array and scoring function
 * mirrors what's used by the free /tests/<name> pages.
 *
 * Loaded as a classic script on /pro/assessment — exposes
 * `window.AT_PRO_TESTS` with the full assessment definition.
 */
(function () {
  // ============================================================
  // MBTI — OEJTS (Open Extended Jungian Type Scales)
  // 32 bipolar items · 1-5 Likert
  // ============================================================
  const MBTI_ITEMS = [
    { first: "I make lists",                              second: "I just put stuff wherever",         axis: "JP", low: "J", high: "P" },
    { first: "I am skeptical",                            second: "I want to believe",                 axis: "TF", low: "T", high: "F" },
    { first: "I get bored when I'm alone",                second: "I need time alone",                 axis: "EI", low: "E", high: "I" },
    { first: "I accept things as they are",               second: "I'm unsatisfied with the way things are", axis: "SN", low: "S", high: "N" },
    { first: "I keep my room clean",                      second: "I just put stuff wherever",         axis: "JP", low: "J", high: "P" },
    { first: "I think \"robotic\" is an insult",          second: "I strive to have a mechanical mind", axis: "TF", low: "F", high: "T" },
    { first: "I'm energetic",                             second: "I'm mellow",                        axis: "EI", low: "E", high: "I" },
    { first: "I prefer multiple choice tests",            second: "I prefer essay answers",            axis: "SN", low: "S", high: "N" },
    { first: "I'm chaotic",                               second: "I'm organized",                     axis: "JP", low: "P", high: "J" },
    { first: "I'm easily hurt",                           second: "I'm thick-skinned",                 axis: "TF", low: "F", high: "T" },
    { first: "I work best in groups",                     second: "I work best alone",                 axis: "EI", low: "E", high: "I" },
    { first: "I focus on the present",                    second: "I focus on the future",             axis: "SN", low: "S", high: "N" },
    { first: "I plan far ahead",                          second: "I plan at the last minute",         axis: "JP", low: "J", high: "P" },
    { first: "I want people's respect",                   second: "I want their love",                 axis: "TF", low: "T", high: "F" },
    { first: "Parties wear me out",                       second: "Parties fire me up",                axis: "EI", low: "I", high: "E" },
    { first: "I try to fit in",                           second: "I try to stand out",                axis: "SN", low: "S", high: "N" },
    { first: "I keep my options open",                    second: "I commit",                          axis: "JP", low: "P", high: "J" },
    { first: "I want to be good at fixing things",        second: "I want to be good at fixing people", axis: "TF", low: "T", high: "F" },
    { first: "I talk more than I listen",                 second: "I listen more than I talk",         axis: "EI", low: "E", high: "I" },
    { first: "When describing an event, I tell what happened", second: "I tell what it meant",        axis: "SN", low: "S", high: "N" },
    { first: "I get work done right away",                second: "I procrastinate",                   axis: "JP", low: "J", high: "P" },
    { first: "I follow my heart",                         second: "I follow my head",                  axis: "TF", low: "F", high: "T" },
    { first: "I stay at home",                            second: "I go out on the town",              axis: "EI", low: "I", high: "E" },
    { first: "I want the big picture",                    second: "I want the details",                axis: "SN", low: "N", high: "S" },
    { first: "I improvise",                               second: "I prepare",                         axis: "JP", low: "P", high: "J" },
    { first: "I base morality on justice",                second: "I base morality on compassion",     axis: "TF", low: "T", high: "F" },
    { first: "It's hard for me to yell loudly",           second: "Yelling comes naturally to me",     axis: "EI", low: "I", high: "E" },
    { first: "I'm theoretical",                           second: "I'm empirical",                     axis: "SN", low: "N", high: "S" },
    { first: "I work hard",                               second: "I play hard",                       axis: "JP", low: "J", high: "P" },
    { first: "I'm uncomfortable with emotions",           second: "I value emotions",                  axis: "TF", low: "T", high: "F" },
    { first: "I like to perform in front of people",      second: "I avoid public speaking",           axis: "EI", low: "E", high: "I" },
    { first: "I like to know \"who, what, when\"",        second: "I like to know \"why\"",            axis: "SN", low: "S", high: "N" }
  ];

  function scoreMBTI(answers) {
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach((v, i) => {
      if (v == null) return;
      const it = MBTI_ITEMS[i];
      // 1 → +2 to low; 2 → +1 to low; 3 → 0; 4 → +1 to high; 5 → +2 to high
      if (v === 1) counts[it.low] += 2;
      else if (v === 2) counts[it.low] += 1;
      else if (v === 4) counts[it.high] += 1;
      else if (v === 5) counts[it.high] += 2;
    });
    // Default ties to I/N/T/J (more common in adults)
    const ax = (a, b, tieTo) => counts[a] > counts[b] ? a : counts[b] > counts[a] ? b : tieTo;
    const code = ax("E", "I", "I") + ax("S", "N", "N") + ax("T", "F", "T") + ax("J", "P", "J");
    return { code, counts };
  }

  // ============================================================
  // Enneagram — OEPS · 36 items · 1-5 Likert · 4 items per type
  // ============================================================
  const ENNEAGRAM_ITEMS = [
    { text: "I am a perfectionist.", type: 1 }, { text: "I strive for efficiency.", type: 1 },
    { text: "I often have to redo other people's work.", type: 1 }, { text: "I keep my belongings in order.", type: 1 },
    { text: "My relationships with others are what my life is about.", type: 2 }, { text: "I have difficulty saying no.", type: 2 },
    { text: "I get lots of satisfaction from helping others achieve their goals.", type: 2 }, { text: "I put family first.", type: 2 },
    { text: "I put work first.", type: 3 }, { text: "I like to stand out.", type: 3 },
    { text: "It is good to wake up to a full day of planned activities.", type: 3 }, { text: "Money is important to my happiness.", type: 3 },
    { text: "I daydream about being in love.", type: 4 }, { text: "I am moody.", type: 4 },
    { text: "I have always felt that I was different from other people.", type: 4 }, { text: "I prefer dressing in unique ways.", type: 4 },
    { text: "I am not very physically active.", type: 5 }, { text: "I would rather read than party.", type: 5 },
    { text: "I have a small group of close friends.", type: 5 }, { text: "I am thrifty.", type: 5 },
    { text: "I worry a lot.", type: 6 }, { text: "I question authority.", type: 6 },
    { text: "I think it is important to follow rules.", type: 6 }, { text: "I am suspicious of people.", type: 6 },
    { text: "I think people take life too seriously.", type: 7 }, { text: "I love trying new things.", type: 7 },
    { text: "I am easily bored by routine.", type: 7 }, { text: "I am usually in a good mood.", type: 7 },
    { text: "People tend to find me intimidating.", type: 8 }, { text: "I am very protective of those I love.", type: 8 },
    { text: "I make quick decisions.", type: 8 }, { text: "I am rebellious.", type: 8 },
    { text: "I am laid back.", type: 9 }, { text: "I try to make every situation harmonious.", type: 9 },
    { text: "It is hard for me to be angry.", type: 9 }, { text: "I tend to procrastinate.", type: 9 }
  ];

  function scoreEnneagram(answers) {
    const scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    answers.forEach((v, i) => {
      if (v == null) return;
      scores[ENNEAGRAM_ITEMS[i].type] += v;
    });
    let dominant = 1, max = -1;
    for (let t = 1; t <= 9; t++) if (scores[t] > max) { max = scores[t]; dominant = t; }
    // Wing = adjacent type with higher score
    const left = dominant === 1 ? 9 : dominant - 1;
    const right = dominant === 9 ? 1 : dominant + 1;
    let wing = null;
    if (scores[left] > scores[right]) wing = left;
    else if (scores[right] > scores[left]) wing = right;
    return { dominant, wing, scores };
  }

  // ============================================================
  // DISC — ODAT · 16 items · 1-5 Likert · 4 items per letter
  // ============================================================
  const DISC_ITEMS = [
    { text: "I put people under pressure.", type: "D" },
    { text: "I have a strong need for power.", type: "D" },
    { text: "I try to outdo others.", type: "D" },
    { text: "I am always on the look out for ways to make money.", type: "D" },
    { text: "I enjoy being part of a loud crowd.", type: "I" },
    { text: "I want strangers to love me.", type: "I" },
    { text: "I joke around a lot.", type: "I" },
    { text: "I make lots of noise.", type: "I" },
    { text: "I hesitate to criticize other people's ideas.", type: "S" },
    { text: "I value cooperation over competition.", type: "S" },
    { text: "I just want everyone to be equal.", type: "S" },
    { text: "I seldom toot my own horn.", type: "S" },
    { text: "I am emotionally reserved.", type: "C" },
    { text: "I read the fine print.", type: "C" },
    { text: "I love order and regularity.", type: "C" },
    { text: "My first reaction to an idea is to see its flaws.", type: "C" }
  ];

  function scoreDISC(answers) {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    answers.forEach((v, i) => { if (v != null) scores[DISC_ITEMS[i].type] += v; });
    const order = ["D", "I", "S", "C"];
    const sorted = order.slice().sort((a, b) => scores[b] - scores[a]);
    const dominant = sorted[0];
    const secondary = sorted[1];
    const isBlend = (scores[dominant] - scores[secondary]) <= 2;
    return { dominant, secondary, isBlend, scores };
  }

  // ============================================================
  // Attachment — ECR-R · 36 items · 1-7 Likert · 14 reverse-scored
  // ============================================================
  const ATTACHMENT_ITEMS = [
    // Anxiety (1-18)
    { text: "I'm afraid that I will lose my partner's love.", sub: "anx", rev: false },
    { text: "I often worry that my partner will not want to stay with me.", sub: "anx", rev: false },
    { text: "I often worry that my partner doesn't really love me.", sub: "anx", rev: false },
    { text: "I worry that romantic partners won't care about me as much as I care about them.", sub: "anx", rev: false },
    { text: "I often wish that my partner's feelings for me were as strong as my feelings for them.", sub: "anx", rev: false },
    { text: "I worry a lot about my relationships.", sub: "anx", rev: false },
    { text: "When my partner is out of sight, I worry that they might become interested in someone else.", sub: "anx", rev: false },
    { text: "When I show my feelings for romantic partners, I'm afraid they will not feel the same about me.", sub: "anx", rev: false },
    { text: "I rarely worry about my partner leaving me.", sub: "anx", rev: true },
    { text: "My romantic partner makes me doubt myself.", sub: "anx", rev: false },
    { text: "I do not often worry about being abandoned.", sub: "anx", rev: true },
    { text: "I find that my partner(s) don't want to get as close as I would like.", sub: "anx", rev: false },
    { text: "Sometimes romantic partners change their feelings about me for no apparent reason.", sub: "anx", rev: false },
    { text: "My desire to be very close sometimes scares people away.", sub: "anx", rev: false },
    { text: "I'm afraid that once a romantic partner gets to know me, they won't like who I really am.", sub: "anx", rev: false },
    { text: "It makes me mad that I don't get the affection and support I need from my partner.", sub: "anx", rev: false },
    { text: "I worry that I won't measure up to other people.", sub: "anx", rev: false },
    { text: "My partner only seems to notice me when I'm angry.", sub: "anx", rev: false },
    // Avoidance (19-36)
    { text: "I prefer not to show a partner how I feel deep down.", sub: "avd", rev: false },
    { text: "I feel comfortable sharing my private thoughts and feelings with my partner.", sub: "avd", rev: true },
    { text: "I find it difficult to allow myself to depend on romantic partners.", sub: "avd", rev: false },
    { text: "I am very comfortable being close to romantic partners.", sub: "avd", rev: true },
    { text: "I don't feel comfortable opening up to romantic partners.", sub: "avd", rev: false },
    { text: "I prefer not to be too close to romantic partners.", sub: "avd", rev: false },
    { text: "I get uncomfortable when a romantic partner wants to be very close.", sub: "avd", rev: false },
    { text: "I find it relatively easy to get close to my partner.", sub: "avd", rev: true },
    { text: "It's not difficult for me to get close to my partner.", sub: "avd", rev: true },
    { text: "I usually discuss my problems and concerns with my partner.", sub: "avd", rev: true },
    { text: "It helps to turn to my romantic partner in times of need.", sub: "avd", rev: true },
    { text: "I tell my partner just about everything.", sub: "avd", rev: true },
    { text: "I talk things over with my partner.", sub: "avd", rev: true },
    { text: "I am nervous when partners get too close to me.", sub: "avd", rev: false },
    { text: "I feel comfortable depending on romantic partners.", sub: "avd", rev: true },
    { text: "I find it easy to depend on romantic partners.", sub: "avd", rev: true },
    { text: "It's easy for me to be affectionate with my partner.", sub: "avd", rev: true },
    { text: "My partner really understands me and my needs.", sub: "avd", rev: true }
  ];

  function scoreAttachment(answers) {
    let anxSum = 0, anxCount = 0, avdSum = 0, avdCount = 0;
    answers.forEach((v, i) => {
      if (v == null) return;
      const it = ATTACHMENT_ITEMS[i];
      const scored = it.rev ? (8 - v) : v;
      if (it.sub === "anx") { anxSum += scored; anxCount++; }
      else { avdSum += scored; avdCount++; }
    });
    const anxiety = anxCount > 0 ? anxSum / anxCount : 4;
    const avoidance = avdCount > 0 ? avdSum / avdCount : 4;
    let style;
    if (anxiety <= 4 && avoidance <= 4) style = "Secure";
    else if (anxiety > 4 && avoidance <= 4) style = "Anxious";
    else if (anxiety <= 4 && avoidance > 4) style = "Avoidant";
    else style = "Disorganized";
    return { style, anxiety, avoidance };
  }

  // ============================================================
  // Big Five — IPIP-50 · 50 items · 1-5 Likert · 20 reverse-scored
  // Each begins with implicit "I…"
  // ============================================================
  const BIGFIVE_ITEMS = [
    { text: "Am the life of the party.", dim: "E", rev: false },
    { text: "Feel little concern for others.", dim: "A", rev: true },
    { text: "Am always prepared.", dim: "C", rev: false },
    { text: "Get stressed out easily.", dim: "N", rev: false },
    { text: "Have a rich vocabulary.", dim: "O", rev: false },
    { text: "Don't talk a lot.", dim: "E", rev: true },
    { text: "Am interested in people.", dim: "A", rev: false },
    { text: "Leave my belongings around.", dim: "C", rev: true },
    { text: "Am relaxed most of the time.", dim: "N", rev: true },
    { text: "Have difficulty understanding abstract ideas.", dim: "O", rev: true },
    { text: "Feel comfortable around people.", dim: "E", rev: false },
    { text: "Insult people.", dim: "A", rev: true },
    { text: "Pay attention to details.", dim: "C", rev: false },
    { text: "Worry about things.", dim: "N", rev: false },
    { text: "Have a vivid imagination.", dim: "O", rev: false },
    { text: "Keep in the background.", dim: "E", rev: true },
    { text: "Sympathize with others' feelings.", dim: "A", rev: false },
    { text: "Make a mess of things.", dim: "C", rev: true },
    { text: "Seldom feel blue.", dim: "N", rev: true },
    { text: "Am not interested in abstract ideas.", dim: "O", rev: true },
    { text: "Start conversations.", dim: "E", rev: false },
    { text: "Am not interested in other people's problems.", dim: "A", rev: true },
    { text: "Get chores done right away.", dim: "C", rev: false },
    { text: "Am easily disturbed.", dim: "N", rev: false },
    { text: "Have excellent ideas.", dim: "O", rev: false },
    { text: "Have little to say.", dim: "E", rev: true },
    { text: "Have a soft heart.", dim: "A", rev: false },
    { text: "Often forget to put things back in their proper place.", dim: "C", rev: true },
    { text: "Get upset easily.", dim: "N", rev: false },
    { text: "Do not have a good imagination.", dim: "O", rev: true },
    { text: "Talk to a lot of different people at parties.", dim: "E", rev: false },
    { text: "Am not really interested in others.", dim: "A", rev: true },
    { text: "Like order.", dim: "C", rev: false },
    { text: "Change my mood a lot.", dim: "N", rev: false },
    { text: "Am quick to understand things.", dim: "O", rev: false },
    { text: "Don't like to draw attention to myself.", dim: "E", rev: true },
    { text: "Take time out for others.", dim: "A", rev: false },
    { text: "Shirk my duties.", dim: "C", rev: true },
    { text: "Have frequent mood swings.", dim: "N", rev: false },
    { text: "Use difficult words.", dim: "O", rev: false },
    { text: "Don't mind being the center of attention.", dim: "E", rev: false },
    { text: "Feel others' emotions.", dim: "A", rev: false },
    { text: "Follow a schedule.", dim: "C", rev: false },
    { text: "Get irritated easily.", dim: "N", rev: false },
    { text: "Spend time reflecting on things.", dim: "O", rev: false },
    { text: "Am quiet around strangers.", dim: "E", rev: true },
    { text: "Make people feel at ease.", dim: "A", rev: false },
    { text: "Am exacting in my work.", dim: "C", rev: false },
    { text: "Often feel blue.", dim: "N", rev: false },
    { text: "Am full of ideas.", dim: "O", rev: false }
  ];

  const BIGFIVE_NORMS = {
    O: { M: 37.5, SD: 5.5, name: "Openness" },
    C: { M: 34.5, SD: 6.0, name: "Conscientiousness" },
    E: { M: 28.5, SD: 7.0, name: "Extraversion" },
    A: { M: 36.5, SD: 5.5, name: "Agreeableness" },
    N: { M: 26.0, SD: 7.0, name: "Neuroticism" }
  };

  function scoreBigFive(answers) {
    const sums = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    const counts = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    answers.forEach((v, i) => {
      if (v == null) return;
      const it = BIGFIVE_ITEMS[i];
      const scored = it.rev ? (6 - v) : v;
      sums[it.dim] += scored;
      counts[it.dim]++;
    });
    const raw = {}, zs = {}, level = {};
    ["O", "C", "E", "A", "N"].forEach((d) => {
      raw[d] = counts[d] > 0 ? (sums[d] / counts[d]) * 10 : BIGFIVE_NORMS[d].M;
      zs[d] = (raw[d] - BIGFIVE_NORMS[d].M) / BIGFIVE_NORMS[d].SD;
      level[d] = zs[d] > 0.5 ? "high" : zs[d] < -0.5 ? "low" : "mid";
    });
    return { raw, zs, level };
  }

  // ============================================================
  // AgentFit — 10 direct AI-preference items
  // 9 forced-choice A/B + 1 multi-select use-case tag
  // ============================================================
  const AGENTFIT_ITEMS = [
    { id: "wrongness",   prompt: "When I'm wrong, my agent should:",        a: "tell me plainly",            b: "soften the landing first" },
    { id: "help_shape",  prompt: "When I ask for help, I usually want:",   a: "one strong recommendation",  b: "a menu of options" },
    { id: "answer_order",prompt: "Default answer shape:",                   a: "answer first, reasoning second", b: "reasoning first, then conclusion" },
    { id: "ambiguity",   prompt: "For ambiguous situations, my agent should:", a: "make a call and justify",     b: "surface tradeoffs and let me choose" },
    { id: "project_mode",prompt: "For projects, I prefer:",                 a: "plan, then act",             b: "prototype, then refine" },
    { id: "warmth",      prompt: "Warmth level I want from my AI:",          a: "dry, direct, terse",         b: "warm, encouraging, human" },
    { id: "autonomy",    prompt: "Autonomy level:",                          a: "act unless blocked",         b: "confirm before major moves" },
    { id: "detail",      prompt: "Detail level I prefer:",                   a: "compact, signal-only",       b: "thorough, show your work" },
    { id: "pushback",    prompt: "Pushback timing — my agent should push back:", a: "early and direct",        b: "only after checking assumptions" },
    {
      id: "use_cases",
      prompt: "My primary AI use cases (pick all that apply):",
      multi: true,
      options: [
        { id: "coding",     label: "Coding" },
        { id: "writing",    label: "Writing" },
        { id: "research",   label: "Research" },
        { id: "admin",      label: "Admin / executive support" },
        { id: "coaching",   label: "Coaching / reflection" },
        { id: "creative",   label: "Creative work" },
        { id: "business",   label: "Business ops" },
        { id: "learning",   label: "Learning / study" }
      ]
    }
  ];

  // ============================================================
  // The full assessment sequence
  // ============================================================
  const SECTIONS = [
    {
      id: "mbti",     name: "MBTI",        color: "#5b4dc0",
      type: "bipolar", items: MBTI_ITEMS,        likert: 5,
      labels: { left: "Strongly first", mid: "Neutral", right: "Strongly second" },
      score: scoreMBTI,
      result: function (r) {
        const NAMES = {
          INTJ: "Architect", INTP: "Logician", ENTJ: "Commander", ENTP: "Debater",
          INFJ: "Advocate",  INFP: "Mediator", ENFJ: "Protagonist", ENFP: "Campaigner",
          ISTJ: "Inspector", ISFJ: "Defender", ESTJ: "Executive", ESFJ: "Consul",
          ISTP: "Virtuoso", ISFP: "Adventurer", ESTP: "Entrepreneur", ESFP: "Entertainer"
        };
        return { headline: r.code, sub: "The " + (NAMES[r.code] || "result") };
      }
    },
    {
      id: "enneagram", name: "Enneagram",   color: "#2f8a5b",
      type: "likert",  items: ENNEAGRAM_ITEMS, likert: 5,
      labels: { left: "Disagree", mid: "Neutral", right: "Agree" },
      score: scoreEnneagram,
      result: function (r) {
        const NAMES = { 1: "Reformer", 2: "Helper", 3: "Achiever", 4: "Individualist", 5: "Investigator", 6: "Loyalist", 7: "Enthusiast", 8: "Challenger", 9: "Peacemaker" };
        const code = "T" + r.dominant + (r.wing ? "w" + r.wing : "");
        return { headline: code, sub: "The " + NAMES[r.dominant] };
      }
    },
    {
      id: "disc",      name: "DISC",        color: "#d99632",
      type: "likert",  items: DISC_ITEMS,    likert: 5,
      labels: { left: "Disagree", mid: "Neutral", right: "Agree" },
      score: scoreDISC,
      result: function (r) {
        const NAMES = { D: "Dominance", I: "Influence", S: "Steadiness", C: "Conscientiousness" };
        const code = r.isBlend ? (r.dominant + r.secondary) : r.dominant;
        return { headline: code, sub: NAMES[r.dominant] + (r.isBlend ? " (" + NAMES[r.secondary] + " blend)" : "") };
      }
    },
    {
      id: "attachment", name: "Attachment", color: "#e07a8a",
      type: "likert",  items: ATTACHMENT_ITEMS, likert: 7,
      labels: { left: "Strongly disagree", mid: "Neutral", right: "Strongly agree" },
      score: scoreAttachment,
      result: function (r) {
        return { headline: r.style, sub: "Anxiety " + r.anxiety.toFixed(1) + " · Avoidance " + r.avoidance.toFixed(1) };
      }
    },
    {
      id: "bigfive",   name: "Big Five",    color: "#3a72c4",
      type: "likert",  items: BIGFIVE_ITEMS, likert: 5,
      labels: { left: "Very inaccurate", mid: "Neutral", right: "Very accurate" },
      itemPrefix: "I ", // each statement starts with implicit "I…"
      score: scoreBigFive,
      result: function (r) {
        const parts = [];
        ["O", "C", "E", "A", "N"].forEach((d) => {
          if (r.level[d] !== "mid") parts.push(d + (r.level[d] === "high" ? "+" : "−"));
        });
        return { headline: parts.length ? parts.join(" · ") : "All-average", sub: "Big Five profile" };
      }
    }
  ];

  // ================================================================
  // Payoff copy — per-result description + mini tuning snippet
  // Used by the split-panel mini-result screen between sections.
  // Composed from axis observations so 16 MBTI types don't need 16
  // hand-written strings; each letter contributes one rule + one
  // observation that get assembled into the description and snippet.
  // ================================================================

  // Each axis contributes a clause that slots into the description sentence
  // ("you process …, decide …, prefer …, run on …") and a behavioral rule
  // that goes into the tuning snippet.
  const MBTI_AXIS = {
    E: { clause: "process out loud and run on interaction",       rule: "Match my pace — fast back-and-forth beats long monologues." },
    I: { clause: "process internally and run on solitude",        rule: "Match my terseness — brief is better than verbose." },
    S: { clause: "think in concrete evidence and lived detail",   rule: "Lead with specifics, not abstractions." },
    N: { clause: "think in patterns and possibilities",           rule: "Connect ideas laterally — surface unexpected angles." },
    T: { clause: "decide by logic when logic and harmony clash",  rule: "Push back directly on flawed premises. I respect resistance, not deference." },
    F: { clause: "decide by values when logic and harmony clash", rule: "Weigh impact on people, not just logic. Soften delivery, sharpen content." },
    J: { clause: "prefer things settled — answers, not options",  rule: "Land on a recommendation. Don't keep options open forever." },
    P: { clause: "prefer things open — options, not premature closing", rule: "Surface alternatives. One answer often feels limiting." }
  };
  const MBTI_NAMES = {
    INTJ: "Architect", INTP: "Logician", ENTJ: "Commander", ENTP: "Debater",
    INFJ: "Advocate",  INFP: "Mediator", ENFJ: "Protagonist", ENFP: "Campaigner",
    ISTJ: "Inspector", ISFJ: "Defender", ESTJ: "Executive", ESFJ: "Consul",
    ISTP: "Virtuoso", ISFP: "Adventurer", ESTP: "Entrepreneur", ESFP: "Entertainer"
  };

  function payoffMBTI(r) {
    const code = r.code;
    const letters = code.split("");
    // Order in the sentence: think (S/N), decide (T/F), prefer (J/P), run (E/I)
    const thinkAxis  = MBTI_AXIS[letters[1]]; // S or N
    const decideAxis = MBTI_AXIS[letters[2]]; // T or F
    const preferAxis = MBTI_AXIS[letters[3]]; // J or P
    const runAxis    = MBTI_AXIS[letters[0]]; // E or I
    const name = MBTI_NAMES[code] || "result";
    const desc =
      "You're an " + code + " — \"The " + name + "\". You " +
      thinkAxis.clause + ", " +
      decideAxis.clause + ", " +
      preferAxis.clause + ", and " +
      runAxis.clause + ".";
    const snippet =
      "# Master tuning · MBTI segment\n\n" +
      "You are talking to an " + code + " (\"The " + name + "\"). Behavioral rules:\n\n" +
      "- " + thinkAxis.rule + "\n" +
      "- " + decideAxis.rule + "\n" +
      "- " + preferAxis.rule + "\n" +
      "- " + runAxis.rule;
    return { desc: desc, snippet: snippet };
  }

  const ENNEAGRAM_PAYOFF = {
    1: { tag: "principled and structure-loving with sharp internal standards", rule: "Acknowledge the standard before challenging it. Sloppy answers read as disrespect." },
    2: { tag: "warm and attuned to others' needs — sometimes at your own expense", rule: "Treat my agreeableness as a default, not consent. Don't mistake friendliness for sign-off." },
    3: { tag: "image-aware, driven, wired for performance and visible results", rule: "Optimize for forward motion and outcomes — not process for process's sake." },
    4: { tag: "expressive, emotion-fluent, drawn to depth and originality", rule: "Engage with the texture, not just the conclusion. Generic answers feel impersonal." },
    5: { tag: "information-dense — you want the model before the move", rule: "Lead with the underlying structure. Conclusions without the architecture feel thin." },
    6: { tag: "a scenario-planner — alert to what could go wrong before it does", rule: "Surface the failure modes alongside the recommendation. Reassurance without analysis is suspicious." },
    7: { tag: "energized by options and possibilities, allergic to constraint", rule: "Show alternatives even when recommending one. Closing the room early reads as boxing in." },
    8: { tag: "a force-of-personality — blunt, decisive, protective", rule: "Be direct. Hedged language reads as weakness, not politeness." },
    9: { tag: "harmony-seeking and conflict-averse — easy default to acceptance", rule: "Press gently for the actual preference. \"Either works\" usually doesn't." }
  };

  function payoffEnneagram(r) {
    const t = r.dominant;
    const wing = r.wing;
    const code = "T" + t + (wing ? "w" + wing : "");
    const NAMES = { 1: "Reformer", 2: "Helper", 3: "Achiever", 4: "Individualist", 5: "Investigator", 6: "Loyalist", 7: "Enthusiast", 8: "Challenger", 9: "Peacemaker" };
    const main = ENNEAGRAM_PAYOFF[t];
    const wingText = wing ? " with a " + (NAMES[wing] || "") + " wing nudging the edges" : "";
    const desc =
      "You're a Type " + t + " — \"" + NAMES[t] + "\"" + wingText + ". You're " + main.tag + ".";
    const snippet =
      "# Master tuning · Enneagram segment\n\n" +
      "You are talking to a Type " + t + " (\"The " + NAMES[t] + "\"" +
      (wing ? "w" + wing : "") + "). Behavioral rule:\n\n" +
      "- " + main.rule;
    return { desc: desc, snippet: snippet };
  }

  const DISC_PAYOFF = {
    D: { tag: "fast, direct, results-oriented",         rule: "Be brief. Get to the move. Skip the windup." },
    I: { tag: "warm, people-charged, social-fueled",    rule: "Bring energy. Flat-affect replies will lose me." },
    S: { tag: "steady, patient, consensus-loving",      rule: "Move at a measured pace. Sudden pivots feel destabilizing." },
    C: { tag: "precise, methodical, detail-driven",     rule: "Show the work. Conclusions without reasoning won't fly." }
  };

  function payoffDISC(r) {
    const code = r.isBlend ? r.dominant + r.secondary : r.dominant;
    const main = DISC_PAYOFF[r.dominant];
    const blend = r.isBlend ? DISC_PAYOFF[r.secondary] : null;
    const desc = blend
      ? "You're a " + code + " — primarily " + main.tag + ", with a secondary edge that's " + blend.tag + "."
      : "You're a " + code + " — " + main.tag + ".";
    const snippet =
      "# Master tuning · DISC segment\n\n" +
      "You are talking to a " + code + " profile. Behavioral rules:\n\n" +
      "- " + main.rule +
      (blend ? "\n- Secondary: " + blend.rule : "");
    return { desc: desc, snippet: snippet };
  }

  const ATTACHMENT_PAYOFF = {
    Secure:       { tag: "easy with both closeness and autonomy",                    rule: "Treat me as a peer. Direct disagreement and warmth can coexist." },
    Anxious:      { tag: "wired for connection and sensitive to disconnection",      rule: "Acknowledge before correcting. Cold transitions feel like withdrawal." },
    Avoidant:     { tag: "valuing autonomy — distance feels safer under pressure",   rule: "Respect the space. Pushy follow-ups push me further away." },
    Disorganized: { tag: "approach/avoid in the same breath — both at once",         rule: "Hold both halves. Don't take pushback as rejection — keep showing up." }
  };

  function payoffAttachment(r) {
    const main = ATTACHMENT_PAYOFF[r.style] || ATTACHMENT_PAYOFF.Secure;
    const desc =
      "Your attachment style is " + r.style + " — you're " + main.tag + ".";
    const snippet =
      "# Master tuning · Attachment segment\n\n" +
      "Attachment style: " + r.style + ". Behavioral rule:\n\n" +
      "- " + main.rule;
    return { desc: desc, snippet: snippet };
  }

  const BIGFIVE_PAYOFF = {
    O: { high: { tag: "open to lateral and unusual ideas",     rule: "Surface unexpected connections. Pattern-jumps are welcome." },
         low:  { tag: "practical and grounded in the proven",  rule: "Stay close to the known. Speculation without evidence reads as noise." } },
    C: { high: { tag: "structured and plan-loving",            rule: "Show the structure of your answer. Loose threads feel sloppy." },
         low:  { tag: "spontaneous and flexible",              rule: "Don't over-plan. Heavy frameworks slow me down." } },
    E: { high: { tag: "energized by interaction",              rule: "Match my pace. Quick exchanges over long monologues." },
         low:  { tag: "energized by solitude",                 rule: "Match my terseness. Brief beats verbose." } },
    A: { high: { tag: "cooperative and harmony-seeking",       rule: "Soften delivery. Cold pushback registers as conflict." },
         low:  { tag: "skeptical and pushback-tolerant",       rule: "Be direct. Hedging reads as evasion." } },
    N: { high: { tag: "emotionally reactive — life feels in HD", rule: "Plan for momentum/stall cycles. Give one anchor when I spiral." },
         low:  { tag: "even-keeled and emotionally stable",      rule: "I can take hard news plainly. No need to cushion." } }
  };

  function payoffBigFive(r) {
    const parts = [];
    const rules = [];
    ["O", "C", "E", "A", "N"].forEach((d) => {
      const lvl = r.level[d];
      if (lvl === "mid") return;
      parts.push(BIGFIVE_PAYOFF[d][lvl].tag);
      rules.push(BIGFIVE_PAYOFF[d][lvl].rule);
    });
    const desc = parts.length
      ? "Big Five: you're " + parts.join("; ") + "."
      : "Your Big Five comes in close to average across all five dimensions — you're flexible across contexts.";
    const snippet = parts.length
      ? "# Master tuning · Big Five segment\n\nBehavioral rules:\n\n- " + rules.join("\n- ")
      : "# Master tuning · Big Five segment\n\nYou're balanced across OCEAN. Stay adaptive — read the room, not the type code.";
    return { desc: desc, snippet: snippet };
  }

  // Attach payoff() to each section so the assessment runner can call
  // section.payoff(result) for any section uniformly.
  SECTIONS[0].payoff = payoffMBTI;
  SECTIONS[1].payoff = payoffEnneagram;
  SECTIONS[2].payoff = payoffDISC;
  SECTIONS[3].payoff = payoffAttachment;
  SECTIONS[4].payoff = payoffBigFive;

  window.AT_PRO_TESTS = {
    SECTIONS,
    AGENTFIT_ITEMS,
    BIGFIVE_NORMS,
    // Total counts for progress display
    TOTAL_ITEMS: SECTIONS.reduce(function (n, s) { return n + s.items.length; }, 0),
    AGENTFIT_COUNT: AGENTFIT_ITEMS.length
  };
})();
