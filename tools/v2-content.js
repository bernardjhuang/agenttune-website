/* AgentTune library v2 content
 *
 * Per-type copy that powers the v2 library page structure:
 *   - demoWhy:       1-line annotation on the before/after demo
 *   - humanContexts: 4 cards on "How to talk to a {type}"
 *                    { conflict, feedback, decisions, brainstorming }
 *   - outward:       4 cards on "If this is you" (outward direction)
 *                    { howYouMayComeAcross, howToStateNeeds, boundaryScript, recoveryPattern }
 *
 * Keys match each contact's `id` in data.js (e.g. "mbti-INTJ", "ennea-5",
 * "disc-D", "attach-secure", "ocean-O-high").
 *
 * Voice rules:
 *   - 2nd-person for "If this is you" cards; 3rd-person for "For humans"
 *   - Concrete > abstract — scripts and observable behaviors
 *   - <em>…</em> wraps direct-quote phrases the user can lift
 *   - ~50-80 words per chunk
 *
 * Used by tools/generate-library.js
 */

const V2 = {};

// ============================================================================
// MBTI (16 types)
// ============================================================================

V2["mbti-INTJ"] = {
  demoWhy: "Generic AI offers a five-step menu. Tuned leads with the strategic recommendation and skips the warmup — INTJs unblock by seeing the architecture, not the options.",
  humanContexts: {
    conflict: "Lead with the disagreement, then the reasoning, then the corrected path. INTJs respect resistance over deference. <em>\"I disagree because X. Here's what I'd do instead.\"</em> Don't open with three softeners — they read it as evasion. Hedging signals you don't actually believe what you're about to say.",
    feedback: "Tie it to a structural cause, not a surface symptom. INTJs want the model: <em>\"This is happening because the upstream assumption is X.\"</em> Generic <em>\"try to be more open\"</em> lands as imprecise. They'll respond to one sharp diagnosis faster than to three gentle observations.",
    decisions: "Don't ask them to consider; ask them to commit. INTJs will pick fast when the trade-offs are named. <em>\"Option A costs X but ships Tuesday. Option B is cleaner but waits two weeks.\"</em> Vague <em>\"what do you think?\"</em> stalls them — they want the variables, then they'll lock in.",
    brainstorming: "Push the model first, ideas second. INTJs generate inside frameworks; without one, they look quiet. Open with <em>\"what's the underlying constraint here?\"</em> and they'll come alive. Don't drag them through five brainstorming exercises before getting to the structure."
  },
  outward: {
    howYouMayComeAcross: "Cold or dismissive — sometimes read as not caring. Your edits sound like rejections; your silences sound like judgment. The terseness that feels efficient to you reads as withholding to others. People who process out loud may feel shut out by your internal-first cadence.",
    howToStateNeeds: "<em>\"I need to think through this alone before we discuss. Give me until Thursday.\"</em> Naming the time + the format works better than vague <em>\"I'll get back to you.\"</em> Process-watchers need to know the loop will close.",
    boundaryScript: "<em>\"I don't have a fast answer on this. Sending a write-up by tomorrow.\"</em> Buys you the deep-think time without leaving the other person hanging in ambiguity.",
    recoveryPattern: "Name the misread once, propose the corrected path, move. <em>\"That came out sharper than I meant. The actual concern is X — here's what I'd want to try.\"</em> Don't over-apologize; that reads as out-of-character and makes people more uneasy, not less."
  }
};

V2["mbti-INTP"] = {
  demoWhy: "Generic AI lists tactics. Tuned probes the underlying assumption — INTPs unblock by interrogating the premise, not by adding more action items.",
  humanContexts: {
    conflict: "Frame disagreement as a theory comparison, not a personal critique. INTPs accept <em>\"your model has a hole here\"</em> faster than <em>\"you're wrong.\"</em> Give them the inconsistency, not the verdict — they'll do the resolution themselves and end up agreeing with you, which feels better than being told.",
    feedback: "Be precise about which claim/model is off, not which behavior. <em>\"Your assumption that X implies Y misses Z\"</em> lands. Generic <em>\"communicate more clearly\"</em> is too imprecise to act on. INTPs want the broken edge, not the broad note.",
    decisions: "They will under-commit if every option is open. Name the cost of further analysis: <em>\"If we're not picked by Friday, we lose the partner slot.\"</em> Hard constraints make them decide. Without one, they'll find a sixth option you hadn't considered.",
    brainstorming: "Let them go wide before narrowing. INTPs need the option-space mapped before they can pick. Don't enforce convergence too early — they'll generate the best ideas in iteration 4, not iteration 1. Mid-session, give a 5-minute hard-stop: <em>\"By 3:15 we pick one to prototype.\"</em>"
  },
  outward: {
    howYouMayComeAcross: "Detached, hard to read. Your default state of <em>\"still thinking\"</em> reads to others as agreement, disinterest, or hidden disapproval — they fill the silence with whichever interpretation worries them most. The lack of social warmth is interpreted; you have to break it intentionally.",
    howToStateNeeds: "<em>\"I'm still chewing on this. Not opposed — give me a day.\"</em> Naming the state (not opposed, not stalling) keeps the other person from making assumptions. <em>\"I'll come back with a counterproposal by Thursday\"</em> closes the loop.",
    boundaryScript: "<em>\"The interesting question isn't X — it's actually Y.\"</em> Use this when someone's pushing you to engage with a frame that doesn't fit. Redirects without dismissing.",
    recoveryPattern: "If you went quiet and people felt ignored, name it explicitly: <em>\"I was processing — wasn't disengaged. Here's where I landed.\"</em> Most miscommunications with INTPs are silence-misread, not actual disagreement."
  }
};

V2["mbti-ENTJ"] = {
  demoWhy: "Generic AI deliberates. Tuned commits — ENTJs unblock by executing a known-imperfect plan immediately, not by perfecting a hypothetical one.",
  humanContexts: {
    conflict: "Be direct, fast, and specific about the cost. ENTJs argue well and respect it back. <em>\"This plan has a bottleneck at step 4 — here's why, here's the fix.\"</em> Equivocation reads as weakness. They will not hold it against you for pushing hard if you have evidence.",
    feedback: "Phrase it as an upgrade, not a correction. <em>\"You'd be 30% faster on these if you delegated X to Y.\"</em> ENTJs hear operational improvements as gifts. Process feedback (<em>\"slow down\"</em>) without business framing tends to bounce off.",
    decisions: "Don't help them decide — help them ratify. ENTJs come to meetings with the call already made. Your job is to surface the one thing they haven't considered: <em>\"Have you talked to legal yet?\"</em> If yes, they execute. If no, they thank you and reschedule.",
    brainstorming: "They want to start with an objective, not a blank canvas. <em>\"We need to hit X by Q3 — what are five paths?\"</em> Open-ended <em>\"let's just riff\"</em> sessions frustrate them. Bound the problem and they'll generate ruthlessly."
  },
  outward: {
    howYouMayComeAcross: "Steamrolling. Your default mode of <em>\"let's go\"</em> can read as bulldozing people who haven't caught up yet. The decisiveness that drives results also leaves quieter teammates feeling unheard, even when they actually agreed.",
    howToStateNeeds: "<em>\"I'm going to push for X. Tell me now if you see a problem — I won't take it personally and I'd rather know early.\"</em> Pre-empting the steamroll dynamic invites pushback before it becomes resentment.",
    boundaryScript: "<em>\"I need a deadline on this. Whose call is it, and by when?\"</em> Names the loop you need closed without micromanaging the path.",
    recoveryPattern: "When you've run someone over, name the speed plainly: <em>\"I moved fast on that and didn't bring you in early enough. What did I miss?\"</em> The directness about your own pattern repairs more than apologies."
  }
};

V2["mbti-ENTP"] = {
  demoWhy: "Generic AI gives a safe summary. Tuned offers the contrarian angle — ENTPs unblock when an idea collides with its strongest counter, not when it gets agreed with.",
  humanContexts: {
    conflict: "Engage, don't deflect. ENTPs use disagreement to think. <em>\"You're missing the case where X — what does your model do then?\"</em> Refusing to engage reads as condescension. They'd rather lose an argument loudly than win it by default.",
    feedback: "Pair the critique with the bigger pattern: <em>\"On three projects in a row, you've ditched the plan at week two. Here's what it costs.\"</em> Single-instance feedback bounces — they explain it away. Pattern-level lands.",
    decisions: "Pre-commit them in writing. <em>\"You said yesterday we'd ship Friday — still good?\"</em> ENTPs will reopen any decision unless someone holds it closed. Once it's a public commitment, they execute.",
    brainstorming: "Let them be wrong out loud. Their best ideas come in iteration 6, after 5 deliberately bad ones. Don't enforce <em>\"good ideas only\"</em> — that kills the engine. Give them a sparring partner who'll push back, not a yes-and partner."
  },
  outward: {
    howYouMayComeAcross: "Contrarian for sport. Your habit of pushing on every idea reads to others as opposition even when you're actually exploring. People stop sharing half-formed ideas around you because they expect to be tested. Frame the testing as engagement, not skepticism.",
    howToStateNeeds: "<em>\"I'm pressure-testing this, not opposing it — assume I'm on your side.\"</em> Saying this once at the top of a conversation prevents 40 minutes of perceived hostility.",
    boundaryScript: "<em>\"I'll commit when you make me commit. Otherwise I'll keep finding holes.\"</em> Names the dynamic so the other person knows to draw the line — they aren't your enemy for doing it.",
    recoveryPattern: "After a debate that went too hard, name it: <em>\"I argued that the way I argue. The underlying point still stands but the volume was wrong.\"</em> Separates the substance from the delivery."
  }
};

V2["mbti-INFJ"] = {
  demoWhy: "Generic AI lists practical steps. Tuned starts with the felt sense and the pattern — INFJs unblock when the underlying current gets named, not when more action gets piled on.",
  humanContexts: {
    conflict: "Acknowledge the pattern before correcting the surface issue. INFJs hear <em>\"you're wrong\"</em> as <em>\"you don't see me.\"</em> Lead with <em>\"I think what you're trying to get to is X — and here's where it's not landing.\"</em> Once they feel understood, they'll absorb the correction quickly.",
    feedback: "Tone is content. INFJs read the temperature of the message more than the words. Soften the delivery, sharpen the substance: be warm AND specific. Generic <em>\"this needs work\"</em> stings; <em>\"the second paragraph is where it loses its shape — try compressing\"</em> doesn't.",
    decisions: "They'll know the right answer before they can articulate it. Ask <em>\"what's your gut?\"</em> first, then help them build the case backwards. Don't rush the gut step — that's where the actual decision lives. Logic comes after.",
    brainstorming: "Give them depth, not breadth. INFJs generate best when they can stay with one thread instead of bouncing across ten. <em>\"Stay with this for twenty minutes — let's see where it goes\"</em> works better than rapid-fire idea generation."
  },
  outward: {
    howYouMayComeAcross: "Withholding, hard to read, or quietly intense. The depth you're processing isn't visible from the outside — people read your stillness as judgment or distance. They don't see the work happening; they see the silence.",
    howToStateNeeds: "<em>\"I need to think on this without talking through it. Can we revisit Friday?\"</em> Names the format (alone, not aloud) and the time so the other person doesn't fill the gap with anxious interpretation.",
    boundaryScript: "<em>\"That's a no for me, and I don't have a longer explanation than that.\"</em> INFJs feel obligated to justify every refusal — naming that you don't owe one is the boundary.",
    recoveryPattern: "When you've absorbed too much of someone else's state, name it cleanly: <em>\"I took that on more than I should have — I'm pulling back not because I'm upset but because I need my own footing back.\"</em>"
  }
};

V2["mbti-INFP"] = {
  demoWhy: "Generic AI prescribes. Tuned honors the values question underneath — INFPs unblock when the choice gets connected to what actually matters, not when the next task gets assigned.",
  humanContexts: {
    conflict: "Frame disagreement as a values mismatch, not a logic error. INFPs will defend a value to the wall; they'll quietly drop a position over logic. <em>\"I think we're optimizing for different things — let's name them\"</em> opens the conversation. <em>\"You're wrong\"</em> closes it.",
    feedback: "Lead with the intent you saw, then the gap. <em>\"You were going for X — here's where it didn't quite land.\"</em> INFPs need their motive to be seen before they can absorb a critique. Skip that step and the feedback feels like an attack on who they are, not what they did.",
    decisions: "Help them rule out the options that violate their values first. INFPs decide by elimination, not by maximization. <em>\"Which of these three you couldn't live with?\"</em> moves faster than <em>\"which is best?\"</em>",
    brainstorming: "Give them solo time before the group session. INFPs generate richly alone and timidly in groups. <em>\"Write down five ideas before we meet\"</em> levels the playing field with louder thinkers."
  },
  outward: {
    howYouMayComeAcross: "Quiet to the point of seeming uncommitted. People read your <em>\"I need to think\"</em> as <em>\"I'm not interested.\"</em> Your reluctance to speak before you've worked it out internally can be misread as lack of engagement.",
    howToStateNeeds: "<em>\"This matters to me more than I'm probably showing. I want to do it right, which is why I'm being slow.\"</em> Lets the other person see the depth you're not externalizing.",
    boundaryScript: "<em>\"That's not aligned for me, and I don't have a longer explanation.\"</em> INFPs feel pressure to justify a no with three reasons — the boundary is letting one suffice.",
    recoveryPattern: "When you've gone quiet under stress, surface it: <em>\"I went inward this week — wasn't avoiding you, was sorting through it. Here's where I am now.\"</em>"
  }
};

V2["mbti-ENFJ"] = {
  demoWhy: "Generic AI gives a process. Tuned considers who's affected and how it lands — ENFJs unblock when the human consequences are named alongside the next step.",
  humanContexts: {
    conflict: "Acknowledge the relationship first, then the issue. ENFJs experience disagreement as a relational threat unless the bond is reaffirmed up front. <em>\"I want us to keep working well together — and I need to push back on X\"</em> works. Cold critique reads as rupture.",
    feedback: "Frame growth feedback as <em>\"what people are going to need from you next\"</em> rather than <em>\"what you got wrong.\"</em> ENFJs orient toward serving the people around them; feedback aimed at their service capacity lands faster than feedback aimed at their performance.",
    decisions: "Help them factor the human cost on each path. ENFJs over-weight the impact on others — sometimes they'll choose the worse business path because it's easier on the team. Name that trade-off explicitly so they can make it consciously.",
    brainstorming: "They'll synthesize a room's energy into a unified direction. Use them as the convergence partner, not the divergence one. After ideas are on the table, ask <em>\"what's the thread that ties these together?\"</em> They'll find it."
  },
  outward: {
    howYouMayComeAcross: "Self-erasing. Your default to <em>\"what does the group need?\"</em> can read as not having your own opinion. People who want your real take get the diplomat instead. Over time, it can feel to them like you're managing them rather than collaborating with them.",
    howToStateNeeds: "<em>\"Setting aside what the team thinks — I want X.\"</em> Naming that you're stepping out of facilitator mode and into participant mode reframes the conversation.",
    boundaryScript: "<em>\"I can't take on another project right now without something else dropping. Which is it?\"</em> Forces the trade-off conversation instead of you absorbing the load silently.",
    recoveryPattern: "When you've over-managed someone's experience, name it: <em>\"I've been smoothing things for you — that wasn't your ask. What do you actually want?\"</em>"
  }
};

V2["mbti-ENFP"] = {
  demoWhy: "Generic AI lists tactics. Tuned reignites the why — ENFPs unblock when the meaning of the work gets re-surfaced, not when the next checkbox gets added.",
  humanContexts: {
    conflict: "Validate the spark first, then surface the gap. ENFPs invest emotionally in their ideas; criticizing the idea reads as criticizing them. <em>\"The energy here is real and X is great — and Y isn't working yet.\"</em> The validation isn't flattery; it's recognition.",
    feedback: "One thing at a time. ENFPs absorb feedback by feel; three notes at once flood them. Give the most important one, let them sit with it, come back later. The follow-up matters as much as the original note.",
    decisions: "Constrain the choice space hard. ENFPs see every option as alive; that's the gift and the trap. <em>\"You have to pick from these three by Friday\"</em> works better than <em>\"what do you want to do?\"</em> Without constraint, they'll generate option six.",
    brainstorming: "They will outproduce anyone in the room for the first 20 minutes. Capture aggressively — they don't always remember the gold from the noise. Designate someone to mirror back the best 3 once the energy starts to ebb."
  },
  outward: {
    howYouMayComeAcross: "Scattered. The fluency that lets you connect five ideas at once reads to others as not finishing any of them. Your enthusiasm can feel like enthusiasm-without-follow-through to people waiting on a deliverable.",
    howToStateNeeds: "<em>\"I have ten ideas, but the one I actually want to do is X. Help me protect time for it.\"</em> Names the difference between generation mode and commitment mode.",
    boundaryScript: "<em>\"I'm going to say no to this so I can finish the thing I already said yes to.\"</em> Externalizes the trade-off you're privately making anyway.",
    recoveryPattern: "When you've dropped a ball, lead with the recovery plan, not the apology. <em>\"I missed this — here's how I'll catch up by Tuesday.\"</em> ENFPs spiral if they sit with the failure; the move out is forward."
  }
};

V2["mbti-ISTJ"] = {
  demoWhy: "Generic AI suggests three vague directions. Tuned gives one concrete, evidence-backed move — ISTJs unblock with proof and protocol, not possibilities.",
  humanContexts: {
    conflict: "Bring receipts. ISTJs respect prior commitments and documented evidence. <em>\"In the Q3 review we agreed X — this conflicts.\"</em> Vague <em>\"this doesn't feel right\"</em> won't move them. Specifics and prior context will.",
    feedback: "Tie it to a standard or precedent they already accept. <em>\"This doesn't meet the spec we set in March\"</em> lands. <em>\"Try a more flexible approach\"</em> bounces. ISTJs improve against measurable benchmarks, not impressionistic ones.",
    decisions: "Give them time and the data. ISTJs don't decide well under pressure; they decide thoroughly with information. <em>\"Here's the data, here's the deadline — come back with your call\"</em> works. Demanding an in-meeting answer produces a defensive answer.",
    brainstorming: "Start from what's already worked. ISTJs build on precedent before novelty. <em>\"What did we do last time? What broke? What's the variation?\"</em> They're not anti-innovation — they're pro-anchored-innovation."
  },
  outward: {
    howYouMayComeAcross: "Rigid or unimaginative. The thoroughness that protects against disasters reads to others as resistance to change. People who improvise feel slowed by your insistence on the plan; they don't see the disasters you've quietly prevented.",
    howToStateNeeds: "<em>\"I need the spec before I can commit. Once we have it, I'll execute hard.\"</em> Names that your apparent reluctance is information-gathering, not opposition.",
    boundaryScript: "<em>\"I can't responsibly say yes without seeing the plan. Show me what we have and I'll tell you what's missing.\"</em>",
    recoveryPattern: "When you've gone too far into critique mode, name it: <em>\"I'm seeing problems faster than I'm seeing the upside — let me steelman the other side for a minute.\"</em>"
  }
};

V2["mbti-ISFJ"] = {
  demoWhy: "Generic AI offers options. Tuned gives one careful, considerate path that protects what matters — ISFJs unblock when the move accounts for the people involved.",
  humanContexts: {
    conflict: "Lower the temperature first. ISFJs experience overt conflict physically and disengage to protect the relationship. <em>\"I want to keep this constructive — and I have a concern about X.\"</em> Slow, warm, specific. The disagreement lands; the connection survives.",
    feedback: "Specific and quiet. ISFJs absorb feedback delivered one-on-one far better than in a group setting. Praise publicly, correct privately. Tie the correction to the impact on others, not on outcomes alone — they're more moved by <em>\"the team felt unsupported\"</em> than by <em>\"the metric dropped.\"</em>",
    decisions: "Help them factor in their own needs. ISFJs over-weight everyone else's preferences and under-weight their own. <em>\"Set aside what works for the team — what do you actually want?\"</em> often gets a different answer than the polite default.",
    brainstorming: "They'll quietly do the prep work no one else will. Use them for the depth, not the breadth. Don't put them in fast-fire idea sessions where the loudest voice wins — let them write first, share second."
  },
  outward: {
    howYouMayComeAcross: "Accommodating to the point where people can't read your actual preferences. The care you put into making things easy for others can read as having no preferences of your own. Over time, that pulls people away from asking.",
    howToStateNeeds: "<em>\"I've been saying yes without thinking. Let me check and come back.\"</em> Buys time to consider what you actually want before the default-yes locks in.",
    boundaryScript: "<em>\"That doesn't work for me. I don't have a longer reason — I just know it doesn't.\"</em> ISFJs feel they need to justify a no; the boundary is using <em>\"because I said so\"</em> when the reason is intuition.",
    recoveryPattern: "When you've absorbed too much for someone else, name it without resentment: <em>\"I took on more than I had capacity for. I need to hand X back — when's the best time?\"</em>"
  }
};

V2["mbti-ESTJ"] = {
  demoWhy: "Generic AI surveys options. Tuned commits, justifies briefly, and assigns the next action — ESTJs unblock with a plan that has a name, a date, and an owner.",
  humanContexts: {
    conflict: "Frame the disagreement as an execution problem. ESTJs argue well about plans and timelines; they get defensive about character. <em>\"This plan won't hit the Q4 deadline — here's why\"</em> works. <em>\"You're not listening\"</em> closes the conversation.",
    feedback: "Make it about the system, not the self. <em>\"The handoff process needs work\"</em> lands better than <em>\"you need to communicate more.\"</em> ESTJs improve systems they're operating inside; they defend their identity. Stay on the process layer.",
    decisions: "They've usually decided before the meeting. Your job is to surface the missing data point: <em>\"Have you checked with the customer-success team yet?\"</em> If yes, execute. If no, useful pause.",
    brainstorming: "Give them an objective and a clock. ESTJs generate well inside constraints. <em>\"15 minutes, three options, pick one\"</em> works. Open-ended <em>\"what if we...\"</em> sessions frustrate them — they'd rather start executing the first viable option."
  },
  outward: {
    howYouMayComeAcross: "Authoritarian. The conviction that drives results can read to others as not making space for them. The directness that saves time can land as not caring about how it lands. People who haven't worked with you long may feel managed rather than collaborated with.",
    howToStateNeeds: "<em>\"I'm going to push hard on this. I'd rather you tell me now if I'm missing something than three weeks in.\"</em> Pre-empts the pattern where you steamroll and find out later.",
    boundaryScript: "<em>\"I need a decision by Friday — yes, no, or who's making the call. I can't keep waiting.\"</em>",
    recoveryPattern: "When you've over-managed: <em>\"I gripped that too tight. You had it. What do you need from me to take it from here?\"</em>"
  }
};

V2["mbti-ESFJ"] = {
  demoWhy: "Generic AI lists steps. Tuned reads the temperature in the room first, then prescribes — ESFJs unblock when the group dynamic gets named, not just the task.",
  humanContexts: {
    conflict: "Reaffirm the relationship before raising the issue. ESFJs experience disagreement as a tear in the social fabric unless the bond is named. <em>\"I value working with you and I need to raise something difficult\"</em> works. Critique without the relational frame lands as rejection.",
    feedback: "Warmth first, then specifics, then warmth again. The praise sandwich actually works for ESFJs — not as flattery but as containment. Specifics in the middle layer; the warmth is what lets them stay in the conversation.",
    decisions: "Help them notice when they're choosing what's best for the group at their own cost. ESFJs absorb the room's preferences and call it their own. <em>\"Forget what would make everyone happy — what would actually serve you?\"</em>",
    brainstorming: "Use them as the synthesizer. After the room generates, ESFJs see the unifying thread other people miss. <em>\"Pull these together — what's the common shape?\"</em> They'll find it faster than anyone."
  },
  outward: {
    howYouMayComeAcross: "Over-attentive, sometimes performative. The warmth that lubricates relationships can read to colder personalities as too much. People who don't process emotionally may feel managed by your check-ins. Adjust register by audience.",
    howToStateNeeds: "<em>\"I need an explicit yes or no on this — reading the room isn't getting me there.\"</em> Names the dynamic where you're absorbing too much and not getting the clear answer you need.",
    boundaryScript: "<em>\"I want to help — and I can't take this on without dropping something else. Which?\"</em>",
    recoveryPattern: "When you've over-managed someone's emotional state: <em>\"I was trying to make this easier for you and I think I crossed into managing your feelings. Sorry — what do you actually want from me?\"</em>"
  }
};

V2["mbti-ISTP"] = {
  demoWhy: "Generic AI explains. Tuned shows — ISTPs unblock by trying the move with their hands, not by reading another framework about it.",
  humanContexts: {
    conflict: "Get to the point and let them quiet-think. ISTPs don't argue in real-time; they retreat, consider, and come back. <em>\"Here's the problem, here's what I think. Let me know\"</em> works better than a long back-and-forth.",
    feedback: "Show, don't tell. <em>\"Watch how I'd approach this part\"</em> lands better than abstract notes. ISTPs learn by observation and trial; verbal-only feedback has lower retention than feedback paired with a concrete example.",
    decisions: "They prefer to commit by doing. <em>\"Try it for two weeks — if it doesn't work, we kill it\"</em> moves faster than long deliberation. Reversibility lowers their decision cost dramatically.",
    brainstorming: "Hands-on prototyping over verbal exploration. Build a quick version of the idea and iterate; don't talk it to death first. ISTPs find the real problems when something exists to break."
  },
  outward: {
    howYouMayComeAcross: "Detached, hard to read. Your silence can be interpreted as indifference, judgment, or disengagement — usually it's just internal processing. People who externalize need a hint that you're still in the conversation.",
    howToStateNeeds: "<em>\"I'm thinking — not ignoring you. Give me 'til tomorrow.\"</em> Cheap to say, prevents a lot of misreads.",
    boundaryScript: "<em>\"I don't need to talk this out — I need to try it. If it breaks, I'll come find you.\"</em>",
    recoveryPattern: "When you've gone too quiet on something that needed engagement: <em>\"I went heads-down on this and lost the thread with you. Where are we?\"</em>"
  }
};

V2["mbti-ISFP"] = {
  demoWhy: "Generic AI prescribes. Tuned honors the way it feels first, then moves — ISFPs unblock when the aesthetic and emotional dimension gets respected, not just the logistical one.",
  humanContexts: {
    conflict: "Slow down, soften the register, get specific. ISFPs read intensity as aggression even when none is intended. <em>\"There's something here I want to talk through — when's a good time?\"</em> opens the door. Surprise confrontation slams it.",
    feedback: "Personal and gentle. ISFPs absorb feedback in private, never in groups. Tie it to the experience the work creates, not just the output. <em>\"This part of the design loses the warmth the rest has\"</em> lands; <em>\"the metrics aren't great\"</em> misses what they care about.",
    decisions: "Help them name which option feels right before they justify it. ISFPs make decisions through values and aesthetics; the rational case comes later. Don't force a pros/cons frame first.",
    brainstorming: "Quiet, visual, individual-first. Show them mood boards, examples, references — not lists of options. They'll pick up on coherence and tone, then articulate a direction."
  },
  outward: {
    howYouMayComeAcross: "Quietly stubborn. The conviction you have about your aesthetic and values reads to others as inflexibility when you don't externalize the reasoning. People can't see what's a hard line for you vs. a soft preference.",
    howToStateNeeds: "<em>\"This is a hard line for me — and these other things I'm flexible on.\"</em> Naming the difference between non-negotiable and preferred prevents others from pushing on the wrong things.",
    boundaryScript: "<em>\"That doesn't feel right and I don't have a longer reason. Trust me on this one.\"</em>",
    recoveryPattern: "When you've withdrawn under stress: <em>\"I pulled back to figure out where I stood. I'm here now — here's where I landed.\"</em>"
  }
};

V2["mbti-ESFP"] = {
  demoWhy: "Generic AI offers a four-step plan. Tuned points at the most fun move that creates motion right now — ESFPs unblock by entering the situation, not by mapping it.",
  humanContexts: {
    conflict: "Keep it warm, keep it short, keep it moving. ESFPs disengage from cold, drawn-out conflicts. <em>\"Hey, this part isn't working — can we adjust?\"</em> in a light register works far better than a sit-down. The relationship matters more than the precise resolution.",
    feedback: "Specific, immediate, and tied to a moment they remember. <em>\"In yesterday's call when you did X — try Y instead next time\"</em> lands. Generalized critique without a moment doesn't stick.",
    decisions: "They'll go with what feels alive in the moment. If you want a future-oriented choice, anchor it to a concrete future moment: <em>\"How will you feel about this in two weeks if we do A vs. B?\"</em>",
    brainstorming: "Loud, social, and physical. ESFPs generate best on their feet, with energy in the room. Sticky notes, whiteboards, walking conversations. Don't put them in a long meeting room session — the energy dies."
  },
  outward: {
    howYouMayComeAcross: "Not serious enough. The lightness that keeps things moving can read to more sober colleagues as not caring about the stakes. The fun that energizes you can register as performative to people in heads-down mode.",
    howToStateNeeds: "<em>\"I work better when there's energy in the room — and I know not everyone does. Tell me when you need quiet.\"</em>",
    boundaryScript: "<em>\"That meeting is going to drain me — can we cut it in half or do it over coffee?\"</em>",
    recoveryPattern: "When you've blown past a deadline because something more fun came up: <em>\"I got pulled into X and dropped this. Here's how I'm catching up.\"</em>"
  }
};

// ============================================================================
// MBTI — ESTP (already in /library/mbti/estp.html hand-built; included here for
// consistency and so the generator can regen it identically if needed)
// ============================================================================

V2["mbti-ESTP"] = {
  demoWhy: "Generic AI offers a careful menu. Tuned forces a single concrete move — because ESTPs unstick by doing, not by deliberating. Action creates feedback; feedback unblocks the rest.",
  humanContexts: {
    conflict: "ESTPs hear long preambles as you not actually believing what you're about to say. Try: <em>\"I disagree because X. Here's what I'd do instead.\"</em> Done. They might push back — that's not rejection, that's engagement. Don't pre-soften with three caveats; that reads as you walking it back before they even respond. Be brief, be direct, and assume they can handle it. They can.",
    feedback: "<em>\"Next time, do X instead\"</em> lands; <em>\"be more thoughtful\"</em> doesn't. ESTPs need to know what to DO with the note, not just that there is one. If the feedback is about a pattern, give them one example and one fix — they'll connect the dots faster than you expect. Skip the praise sandwich; they read it as you not trusting them to handle the actual feedback.",
    decisions: "They'll decide fast — sometimes faster than the room is comfortable with. If you want them to slow down, give them a concrete consequence. Not <em>\"have you thought this through?\"</em> but <em>\"if we ship this and it breaks production, who's on call Saturday?\"</em> Concrete consequences slow them down; abstract caution doesn't.",
    brainstorming: "Don't extend an idea past the point of usefulness — they'll generate, react, regenerate, keep moving. Long whiteboard sessions kill the energy; 20-minute sprints with a quick test in between are gold. They love friendly-competitive framing: <em>\"Bet you can't come up with five wilder versions in ten minutes.\"</em> They'll come up with eight."
  },
  outward: {
    howYouMayComeAcross: "Your speed reads as confidence to some, dismissiveness to others. Pre-deliberators may feel run over. People who process internally need silence, not your follow-up question eight seconds later. Your shorthand can land as <em>\"doesn't care about the details.\"</em> You probably do — you just don't show your work.",
    howToStateNeeds: "Works better than vague <em>\"let's just go.\"</em> Name the decision; name the deadline; offer to revisit. <em>\"Let's pick something for the next two weeks, then we can adjust.\"</em> Most over-planners will accept that framing because it has a built-in escape valve. You get the action; they get the safety net.",
    boundaryScript: "<em>\"I can't think about this in the abstract — can we try it for a week and adjust?\"</em> That single line resolves more meetings than any other ESTP move.",
    recoveryPattern: "After a misfire, one sentence and you're done. <em>\"That didn't work because X — let's try Y\"</em> rebuilds trust faster than apologies. Dwelling reads as out-of-character. Brief acknowledgment, immediate redirection. Same energy that got you into the situation gets you out."
  }
};

// ============================================================================
// Enneagram (9 types)
// ============================================================================

V2["ennea-1"] = {
  demoWhy: "Generic AI offers many paths. Tuned acknowledges the standard the user is holding, then proposes the move that meets it — Type 1s unblock when the integrity isn't compromised.",
  humanContexts: {
    conflict: "Acknowledge the standard before challenging it. Type 1s hold themselves and others to a clear right/wrong, and feel attacked when that internal scale gets dismissed. <em>\"I see what you're trying to uphold — and here's a different way to honor it.\"</em> Don't argue them out of the standard; offer a different path to it.",
    feedback: "Precise and bounded. Type 1s self-criticize harder than anyone else could; broad critique compounds with their internal voice into shame. <em>\"This specific paragraph could be tighter — the rest is solid\"</em> works. <em>\"This needs a lot of work\"</em> activates the inner critic.",
    decisions: "They'll already see the flaws in every option. Don't add more — pick which flaws you can live with. <em>\"All three have problems. Which set of problems are we choosing?\"</em>",
    brainstorming: "Give them permission to be wrong out loud. Type 1s edit themselves before speaking, which kills generation. <em>\"Bad ideas only for the first ten minutes\"</em> can free them up — they're often the most generative once the inner critic gets a break."
  },
  outward: {
    howYouMayComeAcross: "Critical. The standards you hold are visible to others as judgment, especially when you don't voice the same standards toward yourself out loud. People hear the corrections and don't see the self-correction.",
    howToStateNeeds: "<em>\"I'm not criticizing you — I'm criticizing the work, and I do the same thing to mine. Let me know if it crosses a line.\"</em>",
    boundaryScript: "<em>\"I need to fix this before I can move on. Give me an hour.\"</em>",
    recoveryPattern: "When the inner critic has leaked outward and you've been sharper than you meant: <em>\"That was sharper than the situation needed. The point still stands; the delivery doesn't.\"</em>"
  }
};

V2["ennea-2"] = {
  demoWhy: "Generic AI gives a productivity answer. Tuned remembers there's a person at the center — Type 2s unblock when their own needs get factored in alongside everyone else's.",
  humanContexts: {
    conflict: "Don't mistake their friendliness for agreement. Type 2s will smile and help while disagreeing internally; the disagreement only surfaces later, often as withdrawal. <em>\"Is this actually what you want, or are you accommodating me?\"</em> opens the real conversation.",
    feedback: "Frame growth feedback as <em>\"what people will need from you next\"</em> rather than as critique. Type 2s orient by being needed; feedback framed in that direction lands faster than feedback framed as a deficit.",
    decisions: "Help them notice when they're choosing what's best for someone else at their own cost. Type 2s default to others' preferences and call it their own. <em>\"Set aside what helps the team — what do you actually want?\"</em>",
    brainstorming: "Pair them with someone explicit about what they want. Type 2s synthesize and amplify; without a clear other voice in the room they'll fall into facilitator mode and stop generating their own ideas."
  },
  outward: {
    howYouMayComeAcross: "Too much. The warmth you bring as care reads to colder personalities as pressure or performance. People who don't process relationally may feel managed by your attention. Adjust register by audience.",
    howToStateNeeds: "<em>\"I'm not asking what would help you — I'm telling you what I need. Different conversation.\"</em>",
    boundaryScript: "<em>\"I want to help — and I can't take this on without dropping something else. Which?\"</em>",
    recoveryPattern: "When you've over-given and resentment is leaking out: <em>\"I went past my capacity quietly and now I'm grouchy about it. That's on me — here's what I need different next time.\"</em>"
  }
};

V2["ennea-3"] = {
  demoWhy: "Generic AI lists everything. Tuned cuts to the result that moves the metric — Type 3s unblock by ranking what's measurable, not by being thorough.",
  humanContexts: {
    conflict: "Tie the disagreement to outcomes, not character. Type 3s defend their performance instinctively. <em>\"This approach won't hit the number — here's why\"</em> lands. <em>\"You're moving too fast\"</em> doesn't.",
    feedback: "Quantify if possible. Type 3s move based on measurable improvement. <em>\"You're 20% slower on these because of X\"</em> works; <em>\"slow down\"</em> doesn't.",
    decisions: "They'll pick the highest-visibility win. If that's the wrong call, name what's invisible: <em>\"This other path doesn't look impressive but compounds in 6 months.\"</em>",
    brainstorming: "Frame the brainstorm as a competition against a target. Type 3s generate well inside performance frames; pure exploration without stakes doesn't engage them."
  },
  outward: {
    howYouMayComeAcross: "Performative. The image-management that protects you can read to others as inauthentic. People may not feel they ever see the real you, just the polished version.",
    howToStateNeeds: "<em>\"I want to do well here — and I'm telling you that out loud so you know that's what's driving me.\"</em>",
    boundaryScript: "<em>\"I can't take on visible failure right now. Reframe what success means or take me off this.\"</em>",
    recoveryPattern: "When you've shape-shifted to the audience and lost track of what you wanted: <em>\"I told you what I thought you wanted to hear. Here's what I actually think.\"</em>"
  }
};

V2["ennea-4"] = {
  demoWhy: "Generic AI gives a normal answer. Tuned honors the texture — Type 4s unblock when the specific, particular shape of their situation gets seen, not when they're handed a standard playbook.",
  humanContexts: {
    conflict: "Engage with the texture of their experience, not just the conclusion. Type 4s feel dismissed when their nuance gets flattened into a category. <em>\"Walk me through what's different about this for you\"</em> opens the conversation that <em>\"that's normal\"</em> closes.",
    feedback: "Specific and personal. Type 4s read generic feedback as evidence that you don't actually see them. Tie the note to a moment, a turn of phrase, a particular detail.",
    decisions: "Help them avoid the all-or-nothing trap. Type 4s frame choices as identity questions and get stuck. <em>\"What's the smallest version of A you could try without committing?\"</em> often unlocks them.",
    brainstorming: "Encourage depth and detail. Type 4s find the angle no one else sees when they're allowed to stay with the texture instead of being rushed to converge."
  },
  outward: {
    howYouMayComeAcross: "Intense or moody. The depth you experience daily reads to lighter personalities as drama. The specificity that matters to you can register as making things complicated.",
    howToStateNeeds: "<em>\"This is going to sound bigger than it is. I need a minute, not a fix.\"</em>",
    boundaryScript: "<em>\"That doesn't fit my situation — even if it works for most people.\"</em>",
    recoveryPattern: "When you've made a moment about you that wasn't: <em>\"I went inward on that and you needed something different. What do you actually need?\"</em>"
  }
};

V2["ennea-5"] = {
  demoWhy: "Generic AI offers steps. Tuned exposes the underlying model first — Type 5s unblock when the structure gets visible, not when more action gets piled on.",
  humanContexts: {
    conflict: "Bring the data, not the emotion. Type 5s argue from analysis; they shut down under emotional pressure. <em>\"Here's the evidence I'm reading differently\"</em> works. <em>\"You're not hearing me\"</em> walks them out of the room.",
    feedback: "Model-level, not surface-level. Type 5s reorganize when their underlying frame gets challenged; surface notes bounce. <em>\"Your assumption that X drives Y is incomplete — here's what's missing\"</em> lands.",
    decisions: "Don't rush. Type 5s decide thoroughly with enough information. Pressure produces a defensive answer or a withdrawal. Give them the data, give them the deadline, give them space.",
    brainstorming: "Wide research phase first, then convergence. Don't expect on-the-spot creativity; expect deep contribution after they've had time to study the problem."
  },
  outward: {
    howYouMayComeAcross: "Withdrawn or stingy with engagement. The conservation of energy that protects your depth reads to others as not investing in the relationship. People can't tell what's available to ask of you and what isn't.",
    howToStateNeeds: "<em>\"I need to process this alone before I can be useful in conversation. Give me 'til Thursday.\"</em>",
    boundaryScript: "<em>\"I don't have capacity for this conversation right now. Send me what you need in writing.\"</em>",
    recoveryPattern: "When you've gone too deep into withdrawal: <em>\"I went into research mode and lost the conversation. Here's what I found — where are we?\"</em>"
  }
};

V2["ennea-6"] = {
  demoWhy: "Generic AI assures. Tuned names the failure modes alongside the recommendation — Type 6s unblock when the risk gets surfaced, not when it gets glossed over.",
  humanContexts: {
    conflict: "Take the doubt seriously. Type 6s have usually identified a real risk; dismissing it deepens the doubt. <em>\"Tell me what could go wrong\"</em> lets them name it; then you can address it directly.",
    feedback: "Frame it as helping them prepare. Type 6s receive feedback well when it's positioned as risk-mitigation. <em>\"Here's what will trip you up next quarter if X doesn't change\"</em> works.",
    decisions: "Slow them down through worst-case thinking; speed them up by demonstrating that the worst case has been addressed. <em>\"If this fails, what's the recovery?\"</em> They'll commit once they see the safety net.",
    brainstorming: "Use them as the stress-tester. Type 6s see the failure modes everyone else misses. Designate them as the red team — they'll be invaluable and feel valued."
  },
  outward: {
    howYouMayComeAcross: "Anxious or doubt-prone. The scenario-planning that protects against failure reads to optimistic personalities as bringing the room down. People may stop sharing plans with you to avoid the catalog of risks.",
    howToStateNeeds: "<em>\"I'm not arguing against this — I'm trying to see what could go wrong so we can handle it now.\"</em>",
    boundaryScript: "<em>\"I can't commit until I've talked to one more person about this.\"</em>",
    recoveryPattern: "When the doubt has run away with you: <em>\"I spun on this longer than I should have. Here's the version of me that's actually deciding.\"</em>"
  }
};

V2["ennea-7"] = {
  demoWhy: "Generic AI gives a balanced answer. Tuned shows the upside fast — Type 7s unblock by leaning into a possibility, not by working through obligations.",
  humanContexts: {
    conflict: "Keep it short and forward-looking. Type 7s disengage from extended difficulty; they'd rather move to a new topic than resolve a hard one. <em>\"Here's the issue, here's the fix — moving on\"</em> works.",
    feedback: "Pair the correction with what they'll gain. Type 7s avoid pain; they pursue gain. <em>\"You'll be faster on these if you tighten X\"</em> lands; <em>\"this isn't working\"</em> activates avoidance.",
    decisions: "Constrain ruthlessly. Type 7s see every option as alive; without enforced narrowing, they'll generate option 12 and never commit. <em>\"You have to pick from these three by Friday\"</em> moves them.",
    brainstorming: "Give them room to generate wildly, then assign someone else to convergence. Type 7s open the space; pair them with a closer."
  },
  outward: {
    howYouMayComeAcross: "Scattered or commitment-shy. The fluency that lets you see options reads to others as not finishing things. People waiting on a deliverable may feel the enthusiasm without the follow-through.",
    howToStateNeeds: "<em>\"I have ten ideas. The one I'm actually doing is X. Protect time for it.\"</em>",
    boundaryScript: "<em>\"I'm saying no to this so I can finish the thing I said yes to first.\"</em>",
    recoveryPattern: "When you've dropped something because something more fun came up: <em>\"I lost focus on this. Here's the catch-up plan, owning the cost.\"</em>"
  }
};

V2["ennea-8"] = {
  demoWhy: "Generic AI hedges. Tuned states the call plainly and defends it — Type 8s unblock when someone matches their directness, not when they're handled gently.",
  humanContexts: {
    conflict: "Match their directness. Type 8s read hedging as weakness and lose respect for the position. <em>\"You're wrong about X. Here's why.\"</em> They'd rather argue hard and arrive at truth than be tiptoed around.",
    feedback: "Direct, brief, and confident. Don't soften with three qualifiers — Type 8s sense the softening and discount the substance. State the issue, hold the position, let them push back if they want.",
    decisions: "They'll make the call fast and defend it loud. If you want them to reconsider, bring stronger evidence — not stronger emotion. <em>\"Data point you missed: X\"</em> works; <em>\"I'm worried about this\"</em> doesn't.",
    brainstorming: "Give them stakes. Type 8s engage when the problem matters; abstract exercises bore them. <em>\"Lose this contract if we get this wrong\"</em> activates their full attention."
  },
  outward: {
    howYouMayComeAcross: "Intimidating. The directness that's just <em>truth-telling</em> to you can land as aggression to people who manage social temperature. Your <em>\"normal voice\"</em> is louder than most people's <em>\"angry voice.\"</em>",
    howToStateNeeds: "<em>\"This is my regular intensity, not anger. Tell me if it's too much.\"</em>",
    boundaryScript: "<em>\"That's not happening. Move.\"</em>",
    recoveryPattern: "When you've steamrolled: <em>\"I came at that harder than it needed. The point holds; the volume was wrong.\"</em>"
  }
};

V2["ennea-9"] = {
  demoWhy: "Generic AI gives a balanced summary. Tuned surfaces the actual preference under the comfort with all options — Type 9s unblock when their own voice gets named, not subsumed.",
  humanContexts: {
    conflict: "Gently insist they articulate a preference. Type 9s default to <em>\"either works\"</em> and then quietly resent the choice that gets made. <em>\"Don't tell me what's fine — tell me what you actually want\"</em> opens the conversation.",
    feedback: "Specific and warm. Type 9s minimize feedback (<em>\"oh, it's fine\"</em>) to avoid disruption. Be explicit that you want their honest read, not the polite version.",
    decisions: "Force the issue with a soft deadline. Type 9s avoid the discomfort of deciding by drifting. <em>\"Pick by Friday — if you don't, I'll pick for you\"</em> often gets a faster choice than expected.",
    brainstorming: "Use them as the synthesizer. Type 9s see the unifying frame that connects disparate ideas. Don't expect rapid divergence; expect quiet integration."
  },
  outward: {
    howYouMayComeAcross: "Hard to read. The comfort with all options reads to others as not having a stake. People can't tell what matters to you, so they stop asking.",
    howToStateNeeds: "<em>\"I have a preference and I'm going to name it now even though it's uncomfortable: X.\"</em>",
    boundaryScript: "<em>\"That doesn't work for me, and I'm not going to soften it.\"</em>",
    recoveryPattern: "When you've gone along to keep the peace and resentment is building: <em>\"I said yes when I meant no. That's on me — let me re-do that.\"</em>"
  }
};

// ============================================================================
// DISC (4 types)
// ============================================================================

V2["disc-D"] = {
  demoWhy: "Generic AI deliberates. Tuned gives the move and gets out of the way — D-type unblocks by executing, not by surveying options.",
  humanContexts: {
    conflict: "Be direct. D-types respect resistance and dismiss diplomacy. <em>\"This won't work because X — try Y\"</em> works. Soft openings get cut off.",
    feedback: "Brief, results-focused, paired with a clear next move. D-types move on improvements they can execute today; broad notes bounce.",
    decisions: "Don't slow them — give them the missing fact. <em>\"Have you talked to legal yet?\"</em> If no, useful pause. If yes, get out of their way.",
    brainstorming: "Bounded by a clear objective and a clock. D-types generate inside constraints; open-ended exercises waste their time."
  },
  outward: {
    howYouMayComeAcross: "Steamrolling. The speed that drives results can leave people feeling unheard. Your <em>\"let's go\"</em> reads as <em>\"I don't care what you think\"</em> to slower processors.",
    howToStateNeeds: "<em>\"I'm going to push hard on this. Tell me now if you have an issue — I won't take it personally.\"</em>",
    boundaryScript: "<em>\"I need a decision by Friday. Yes, no, or escalate.\"</em>",
    recoveryPattern: "When you've run someone over: <em>\"I moved fast and didn't loop you in. What did I miss?\"</em>"
  }
};

V2["disc-I"] = {
  demoWhy: "Generic AI lists steps. Tuned brings the energy and a story — I-types unblock when the work feels social and alive, not procedural.",
  humanContexts: {
    conflict: "Keep it warm. I-types disengage from cold confrontation; they need the relationship intact to absorb the issue. <em>\"I care about this working between us — and here's where it's not\"</em> works.",
    feedback: "Quick, specific, and tied to a moment. I-types absorb feedback in motion better than in a sit-down meeting.",
    decisions: "They'll decide based on who they trust and what feels right. If you want a rigorous decision, slow them down with: <em>\"Walk me through the data, not the vibe.\"</em>",
    brainstorming: "Loud, social, on their feet. I-types generate best with people, energy, and verbal flow."
  },
  outward: {
    howYouMayComeAcross: "Flighty or not serious. The energy that makes you fun to work with can register as not focused to colleagues in heads-down mode.",
    howToStateNeeds: "<em>\"I work best when there's energy in the room. I know not everyone does — tell me when you need quiet.\"</em>",
    boundaryScript: "<em>\"That meeting will drain me. Can we cut it in half?\"</em>",
    recoveryPattern: "When you've over-promised in the moment and can't deliver: <em>\"I got excited and committed beyond what I can actually do. Here's the smaller version.\"</em>"
  }
};

V2["disc-S"] = {
  demoWhy: "Generic AI pivots fast. Tuned moves at a steady pace and protects the team's stability — S-types unblock when change is paced, not sprung.",
  humanContexts: {
    conflict: "Slow, calm, and one-on-one. S-types absorb disagreement in private at a measured pace. Surprise or speed makes them retreat. <em>\"I want to flag something. Take your time on it\"</em> works.",
    feedback: "Quiet and constructive. S-types take feedback personally; tie it to a clear path forward so it doesn't become rumination.",
    decisions: "Don't force speed. S-types decide thoroughly with time. Pressure produces a defensive yes that won't stick.",
    brainstorming: "Give them prep time. S-types generate best when they've thought about the problem alone first, then can contribute thoughtfully in the group."
  },
  outward: {
    howYouMayComeAcross: "Slow or change-resistant. The steadiness that holds teams together can read as resistance to faster colleagues. They don't see the stability you're providing; they see the speed they're missing.",
    howToStateNeeds: "<em>\"I'll get there — and I move at this pace on purpose. Trust the cadence.\"</em>",
    boundaryScript: "<em>\"I can't take on more without something coming off. Which?\"</em>",
    recoveryPattern: "When you've absorbed too much without raising it: <em>\"I've been quiet about being stretched. Here's what I actually need.\"</em>"
  }
};

V2["disc-C"] = {
  demoWhy: "Generic AI generalizes. Tuned shows the work — C-types unblock when the reasoning is visible, not when the conclusion is presented bare.",
  humanContexts: {
    conflict: "Bring evidence. C-types argue with documents and data; opinion-based pushback bounces. <em>\"Here's the spec — this isn't meeting it\"</em> lands.",
    feedback: "Specific, written, and detailed. C-types absorb structured feedback in a way they can act on; vague verbal notes don't stick.",
    decisions: "Give them the time and the data. C-types decide rigorously when both are present and defensively when either is missing.",
    brainstorming: "Research phase first. C-types generate best with material to react to, not from a blank canvas."
  },
  outward: {
    howYouMayComeAcross: "Cold or perfectionist. The precision that produces quality reads to faster colleagues as nitpicking. People feel evaluated by your standards rather than supported by them.",
    howToStateNeeds: "<em>\"I need to see the spec before I can commit. Once it's clear, I'll execute hard.\"</em>",
    boundaryScript: "<em>\"I can't responsibly ship this without seeing X. Walk me through it first.\"</em>",
    recoveryPattern: "When you've gone too far into critique: <em>\"I caught problems faster than I caught upside. Let me name what's working too.\"</em>"
  }
};

// ============================================================================
// Attachment (4 styles)
// ============================================================================

V2["attach-secure"] = {
  demoWhy: "Generic AI hedges. Tuned speaks at peer register — Secure attachment unblocks with direct, warm, unequivocal communication.",
  humanContexts: {
    conflict: "Direct without cushioning. Secure-attached people handle disagreement well; over-softening reads as condescension. State the issue plainly, hold the position, listen to the response.",
    feedback: "Specific and balanced. Treat them as a peer who can absorb critique without being managed. The praise sandwich is unnecessary; clarity respects them more.",
    decisions: "Lay out the trade-offs and let them choose. Secure attachment supports rigorous decision-making; you don't need to protect them from hard options.",
    brainstorming: "Wide-open and collaborative. Secure-attached people contribute confidently and incorporate others' ideas without ego."
  },
  outward: {
    howYouMayComeAcross: "Sometimes too matter-of-fact. The directness that works for you can leave more anxious colleagues feeling under-reassured. Read the room and add explicit warmth when it's needed.",
    howToStateNeeds: "<em>\"Here's what I need from you — and I'm fine if the answer is no.\"</em>",
    boundaryScript: "<em>\"That's not going to work for me. Let's find something that does.\"</em>",
    recoveryPattern: "When you've been more matter-of-fact than the situation called for: <em>\"I was direct in a way that may have read as cold. The point holds — and I do care how you took it.\"</em>"
  }
};

V2["attach-anxious"] = {
  demoWhy: "Generic AI is brisk. Tuned reassures AND decides — Anxious attachment unblocks when warmth and clarity arrive together, not in trade.",
  humanContexts: {
    conflict: "Frame it inside the relationship, not against it. Anxious-attached people hear critique as evidence of withdrawal. <em>\"We're good — and I want to flag X\"</em> opens the door that bare critique closes.",
    feedback: "Warm AND clear. Anxious attachment reads a clear note without warmth as rejection. Be explicit: <em>\"This isn't about us, it's about the work — and the work has this gap.\"</em>",
    decisions: "Help them tolerate the gap between asking and answer. Anxious-attached people interpret silence as bad news. Give a timeline: <em>\"I'll come back Thursday — silence until then doesn't mean anything.\"</em>",
    brainstorming: "Frequent affirmation that their contributions are heard. Anxious-attached people will over-monitor for signs they're being dismissed; explicit acknowledgment frees them up."
  },
  outward: {
    howYouMayComeAcross: "Too eager for reassurance. The need for confirmation can read as needing constant validation. People who don't externalize feelings may feel pressured by the regular check-ins.",
    howToStateNeeds: "<em>\"I'm reading silence as bad news right now — I know it's probably not, but if you can give me a quick read, it helps.\"</em>",
    boundaryScript: "<em>\"I need a yes or no — the ambiguity is harder than either answer.\"</em>",
    recoveryPattern: "When you've over-pursued reassurance: <em>\"I was reading more into the silence than was there. Resetting.\"</em>"
  }
};

V2["attach-avoidant"] = {
  demoWhy: "Generic AI asks how they feel. Tuned gives them space and a path — Avoidant attachment unblocks with concrete moves, not emotional check-ins.",
  humanContexts: {
    conflict: "Get to the point and back off. Avoidant-attached people retreat under intensity; brief, direct, and giving them processing time works better than a long talk.",
    feedback: "Specific and bounded. Avoidant attachment will hear extended feedback as emotional flooding and disengage. One point, one fix, room to think.",
    decisions: "Give them autonomy and the deadline. Avoidant-attached people decide well alone with information; group processing of their decision is uncomfortable.",
    brainstorming: "Async first. Send the problem in advance, let them think, surface the contributions in the meeting. In-the-moment generation under social pressure produces lower-quality output."
  },
  outward: {
    howYouMayComeAcross: "Cold or distant. The autonomy you protect reads to others as not investing in the relationship. People who externalize feelings may feel they're chasing you.",
    howToStateNeeds: "<em>\"I'm not pulling away — I need to think alone before I can be useful in conversation. Back Thursday.\"</em>",
    boundaryScript: "<em>\"I can't process this in the moment. Send it to me in writing and I'll come back.\"</em>",
    recoveryPattern: "When you've withdrawn and the other person felt abandoned: <em>\"I went heads-down and lost the loop with you. Not personal — and I see why it felt personal.\"</em>"
  }
};

V2["attach-disorganized"] = {
  demoWhy: "Generic AI assumes a steady stance. Tuned holds both halves — Disorganized attachment unblocks when the approach-and-avoid pattern gets accepted, not corrected.",
  humanContexts: {
    conflict: "Hold both halves of their reaction. Disorganized-attached people may ask for help and push back on it in the same message. Don't take the pushback personally — keep showing up. Withdrawing reinforces the loop; staying present without pressuring breaks it.",
    feedback: "Stable, repeated, low-temperature. One sharp critique can trigger a withdraw-then-attack cycle. Smaller doses, given consistently, land better.",
    decisions: "Give them more time than feels needed. Disorganized attachment makes decisions feel weighted with relational consequence; pressure compounds the ambivalence.",
    brainstorming: "Pair them with someone safe and consistent. Disorganized-attached people open up around stable presence; reactive partners make them go quiet."
  },
  outward: {
    howYouMayComeAcross: "Contradictory. The approach-and-avoid pattern reads to others as not knowing what you want. People can't predict which side will surface, which makes them hold back.",
    howToStateNeeds: "<em>\"I'm going to ask for X and then probably push back on it. Hold both — they're both real.\"</em>",
    boundaryScript: "<em>\"I need to step back from this for a bit. I'll come back — that's not the same as not caring.\"</em>",
    recoveryPattern: "When you've cycled hard and damaged trust: <em>\"I asked, then I pushed back, then I went quiet. I see the pattern — what I actually meant was X.\"</em>"
  }
};

// ============================================================================
// OCEAN (10 dimensions)
// ============================================================================

V2["ocean-O-high"] = {
  demoWhy: "Generic AI sticks to the known path. Tuned offers the unexpected angle — High Openness unblocks when novelty is surfaced, not when conventions are reinforced.",
  humanContexts: {
    conflict: "Engage with the texture of the disagreement, not just the verdict. High-O people get bored by binary right/wrong framing; they generate when the disagreement is reframed as <em>\"different valid models.\"</em>",
    feedback: "Connect it to a broader pattern or analogy. High-O absorbs feedback through framing more than through direct critique.",
    decisions: "They'll explore widely. To converge, force a hard constraint: <em>\"Pick from these three by Friday.\"</em> Without that, they'll keep generating option six.",
    brainstorming: "Pure value-add. High-O brings the angles no one else sees. Don't enforce convergence too early."
  },
  outward: {
    howYouMayComeAcross: "Scattered or impractical. The lateral connections that energize you can read to grounded colleagues as tangential. People waiting on execution may feel exploration is delay.",
    howToStateNeeds: "<em>\"I have many angles — the one I'm actually committing to is X.\"</em>",
    boundaryScript: "<em>\"I need creative time before I can deliver tactical answers. Block it.\"</em>",
    recoveryPattern: "When you've explored past the deadline: <em>\"I went wide when I needed to converge. Locking in X now.\"</em>"
  }
};

V2["ocean-O-low"] = {
  demoWhy: "Generic AI speculates. Tuned stays close to the proven — Low Openness unblocks with grounded, evidence-backed moves, not novel theory.",
  humanContexts: {
    conflict: "Anchor in past precedent. Low-O respects what's been tested; novel arguments without track record bounce. <em>\"We tried X last year and Y happened\"</em> works.",
    feedback: "Concrete and tied to known standards. Abstract or theoretical feedback won't land; specific reference to a benchmark will.",
    decisions: "Show the data and the precedent. Low-O decides confidently when both are present.",
    brainstorming: "Start from what's working. Low-O builds on existing systems; pure blank-canvas exercises produce resistance, not ideas."
  },
  outward: {
    howYouMayComeAcross: "Rigid or unimaginative. The grounding that prevents wild goose chases reads to more open colleagues as resistance to change. They don't see the disasters you've avoided.",
    howToStateNeeds: "<em>\"I need the precedent and the data before I can move. Once we have them, I'll execute hard.\"</em>",
    boundaryScript: "<em>\"I can't responsibly try this without seeing how it's worked elsewhere.\"</em>",
    recoveryPattern: "When you've been too anchored to the past: <em>\"I was holding the existing pattern too tight. Open to the new approach if we pilot it small.\"</em>"
  }
};

V2["ocean-C-high"] = {
  demoWhy: "Generic AI suggests vaguely. Tuned gives the structured plan with owner + deadline — High Conscientiousness unblocks with clarity, not exploration.",
  humanContexts: {
    conflict: "Argue about the plan, not the person. High-C defends their execution and accepts critique of the framework. <em>\"This plan misses step 4\"</em> works; <em>\"you're moving wrong\"</em> doesn't.",
    feedback: "Specific, structured, written. High-C absorbs documented feedback in a way they can act on systematically.",
    decisions: "They've usually planned ahead. Your job is to bring the one variable they didn't model.",
    brainstorming: "Inside constraints, fast. High-C generates well when the box is clear. Open-ended sessions feel inefficient."
  },
  outward: {
    howYouMayComeAcross: "Inflexible or controlling. The thoroughness that protects deliverables reads to less-structured colleagues as not trusting them. People may feel managed by your plans rather than supported by them.",
    howToStateNeeds: "<em>\"I need the spec to be settled before I commit. After that, I'll move fast.\"</em>",
    boundaryScript: "<em>\"I can't commit to an undefined deliverable. Define it or take me off it.\"</em>",
    recoveryPattern: "When you've over-planned at the expense of momentum: <em>\"I gripped the plan too tight. Let's pilot it imperfect and adjust.\"</em>"
  }
};

V2["ocean-C-low"] = {
  demoWhy: "Generic AI plans extensively. Tuned starts moving and adjusts in motion — Low Conscientiousness unblocks by acting, not by structuring.",
  humanContexts: {
    conflict: "Keep it short. Low-C disengages from long, structured conversations. Get to the point, propose the next move, move on.",
    feedback: "Brief, action-tied. <em>\"Next time, try X\"</em> works far better than extended process critique.",
    decisions: "They'll go with intuition. If you want a planned answer, name what they need to think through specifically: <em>\"Before you say yes, talk to legal.\"</em>",
    brainstorming: "Loose and fast. Low-C generates well when the structure is light. Heavy frameworks slow them down."
  },
  outward: {
    howYouMayComeAcross: "Unreliable. The flexibility that lets you adapt reads to structured colleagues as not finishing things. People may feel they can't count on the deliverable arriving on time.",
    howToStateNeeds: "<em>\"I work best with light structure. Tell me the deadline and the deliverable — I'll handle the path.\"</em>",
    boundaryScript: "<em>\"Don't ask me to plan it in advance — let me run at it and report back.\"</em>",
    recoveryPattern: "When you've under-delivered on structure: <em>\"I dropped the planning ball. Here's the catch-up — and I'm setting a check-in midweek so it doesn't slip again.\"</em>"
  }
};

V2["ocean-E-high"] = {
  demoWhy: "Generic AI offers async paths. Tuned brings energy and conversation — High Extraversion unblocks in dialogue, not in isolation.",
  humanContexts: {
    conflict: "Talk it out, in person, soon. High-E people work disagreements out best in real-time conversation; written critique festers.",
    feedback: "Verbal, fast, embedded in conversation. High-E absorbs feedback woven into normal interaction better than in a formal sit-down.",
    decisions: "They'll think out loud to decide. Don't interrupt the talking; that IS the deciding.",
    brainstorming: "Their natural mode. Use them to energize the room and generate volume; pair with a quiet processor for depth."
  },
  outward: {
    howYouMayComeAcross: "Too much energy. The vitality that makes you engaging can drain quieter colleagues. The pace that helps you think can run them over.",
    howToStateNeeds: "<em>\"I think out loud — when I'm talking it doesn't mean I've decided. Push back on me in real-time.\"</em>",
    boundaryScript: "<em>\"I need a meeting to think this through. Async isn't going to work.\"</em>",
    recoveryPattern: "When you've overwhelmed someone with verbal volume: <em>\"I processed all of that out loud at you. What landed and what didn't?\"</em>"
  }
};

V2["ocean-E-low"] = {
  demoWhy: "Generic AI suggests calling a meeting. Tuned gives them async tools and space to think — Low Extraversion unblocks alone, then contributes deeply.",
  humanContexts: {
    conflict: "Written first, conversation second. Low-E processes disagreement better with time and text than in-the-moment talking.",
    feedback: "Written, specific, with space to absorb. Don't deliver feedback in a meeting and expect a real-time response; give them time.",
    decisions: "Quiet and alone. Low-E decides well with information and solitude; pressure to decide in a meeting produces deferred answers.",
    brainstorming: "Async generation, sync convergence. Send the problem ahead of time; let them write first; discuss the output."
  },
  outward: {
    howYouMayComeAcross: "Disengaged. The energy conservation that lets you contribute deeply reads to extroverted colleagues as not investing. They may not see the work happening behind the silence.",
    howToStateNeeds: "<em>\"I process internally — I'm not disengaged. Give me 'til tomorrow.\"</em>",
    boundaryScript: "<em>\"I can't think this through in real-time. Send it in writing.\"</em>",
    recoveryPattern: "When your silence has been read as disengagement: <em>\"I was processing, not absent. Here's where I landed.\"</em>"
  }
};

V2["ocean-A-high"] = {
  demoWhy: "Generic AI gives a flat answer. Tuned softens delivery while sharpening content — High Agreeableness unblocks when warmth and substance arrive together.",
  humanContexts: {
    conflict: "Frame disagreement inside the relationship. High-A experiences cold critique as a relational threat. <em>\"I care about us working well — and I have a concern\"</em> opens the door.",
    feedback: "Warm and specific. Skip the formal critique format; high-A absorbs feedback better in conversational, relationship-respecting register.",
    decisions: "Help them notice when they're choosing what helps the group at their own cost. High-A absorbs others' preferences as their own.",
    brainstorming: "Use them as the synthesizer. High-A sees the unifying thread that brings the room together."
  },
  outward: {
    howYouMayComeAcross: "Pushover or non-committal. The cooperative orientation that protects relationships reads to harder personalities as not having a real opinion.",
    howToStateNeeds: "<em>\"Setting aside what's easiest for the group — what I actually want is X.\"</em>",
    boundaryScript: "<em>\"I want to help — and I can't take this on without dropping something else.\"</em>",
    recoveryPattern: "When you've absorbed too much for someone else: <em>\"I said yes when I meant no. Resetting.\"</em>"
  }
};

V2["ocean-A-low"] = {
  demoWhy: "Generic AI hedges. Tuned states the call without softeners — Low Agreeableness unblocks with directness, not diplomacy.",
  humanContexts: {
    conflict: "Direct, fast, evidence-based. Low-A respects substance and dismisses hedging. <em>\"You're wrong about X — here's why\"</em> works.",
    feedback: "Brief, specific, unsoftened. The praise sandwich actively undermines low-A reception; they hear the cushion as untrustworthy.",
    decisions: "They'll commit fast and defend. Bring stronger evidence to reopen — emotional appeals won't move them.",
    brainstorming: "Stakes-driven. Low-A engages when the problem matters; abstract exercises bore them."
  },
  outward: {
    howYouMayComeAcross: "Cold or combative. The directness that's truth-telling to you can land as aggression. Your <em>\"normal\"</em> can be sharper than most people's <em>\"sharp.\"</em>",
    howToStateNeeds: "<em>\"This is my regular intensity, not anger. Tell me if it's too much.\"</em>",
    boundaryScript: "<em>\"That's not happening. Move.\"</em>",
    recoveryPattern: "When you've cut deeper than the situation needed: <em>\"That was sharper than the issue warranted. The point holds; the volume was wrong.\"</em>"
  }
};

V2["ocean-N-high"] = {
  demoWhy: "Generic AI gives a tidy answer. Tuned anchors them with one concrete next move — High Neuroticism unblocks with single-step clarity, not multi-step plans.",
  humanContexts: {
    conflict: "Lower the temperature before raising the issue. High-N hears critique through an already-amplified internal signal; cold delivery compounds. <em>\"We're good — and I want to flag something\"</em> works.",
    feedback: "Specific, contained, with an action. High-N spirals on vague critique; the spiral is interrupted by a concrete next move.",
    decisions: "When they spiral, give them one anchor — not five options. <em>\"Do X today. We'll figure out tomorrow tomorrow\"</em> can reset them.",
    brainstorming: "In low-stakes framing. High-N generates well when the stakes are deliberately lowered (<em>\"this is a draft, we'll throw most of it out\"</em>) and shuts down under high evaluation."
  },
  outward: {
    howYouMayComeAcross: "Reactive or dramatic. The intensity of your internal experience reads to lower-N people as overreaction. They don't feel what you feel and may read it as choice rather than wiring.",
    howToStateNeeds: "<em>\"I'm at higher volume internally than this situation warrants — I know. Give me a minute, not a fix.\"</em>",
    boundaryScript: "<em>\"I need to step away before I respond to this. Back in an hour.\"</em>",
    recoveryPattern: "After a spiral: <em>\"I spun on that harder than the situation needed. Resetting — here's the actual issue.\"</em>"
  }
};

V2["ocean-N-low"] = {
  demoWhy: "Generic AI cushions hard news. Tuned delivers plainly — Low Neuroticism unblocks with direct information, no softening.",
  humanContexts: {
    conflict: "Plain and direct. Low-N handles hard news without cushioning. Soft openings get read as wasting time.",
    feedback: "Specific and unsoftened. Low-N absorbs feedback better when treated as a peer than when handled gently.",
    decisions: "Lay out the trade-offs and step back. Low-N supports rigorous decision-making without protection.",
    brainstorming: "Wide-open. Low-N handles high-stakes framing without compression."
  },
  outward: {
    howYouMayComeAcross: "Unfeeling or detached. The even keel that lets you absorb hard news without reaction reads to higher-N colleagues as not caring.",
    howToStateNeeds: "<em>\"I'm steady through this — that's not because I don't care, it's because steady is how I help.\"</em>",
    boundaryScript: "<em>\"I can take hard news plainly. Don't soften — just tell me.\"</em>",
    recoveryPattern: "When your steadiness has read as indifference: <em>\"I didn't react visibly to that — I did care. Here's what I'm doing about it.\"</em>"
  }
};

module.exports = V2;
