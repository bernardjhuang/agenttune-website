Source: https://agent-tune.com/guides/open-source-enneagram-test
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Resources

# An open-source Enneagram test on GitHub.

        By Bernard Huang · Updated September 25, 2026

        Download score.js and questions.json. Pass 36 integers from 1 to 5 in item order to score(). It returns nine raw totals and all tied leaders. This is AgentTune’s 36-item adaptation, not the full 54-item OEPS.

## Download the developer files.

        The scorer has no dependencies and supports Node CommonJS and a browser script tag. Download the files to a directory you choose.

| File | Contents |

| [score.js](https://agent-tune.com/resources/enneagram/score.js) | Input validation, all nine totals and explicit ties. MIT code. |

| [questions.json](https://agent-tune.com/resources/enneagram/questions.json) | 36 item IDs, wording, type keys, scale and provenance. |

| [README.md](https://agent-tune.com/resources/enneagram/README.md) | Integration examples and the input/output contract. |

| [LICENSE-code.txt](https://agent-tune.com/resources/enneagram/LICENSE-code.txt) | License for the JavaScript implementation. |

[Browse the implementation on GitHub](https://github.com/bernardjhuang/agenttune-website/tree/main/resources/enneagram) · [View the library’s questionnaire specification](https://github.com/bernardjhuang/agenttune/blob/main/tests/enneagram.md) · [Take the interactive test](https://agent-tune.com/tests/enneagram).

## Try the scorer in your browser.

        Edit the example array or load a preset. This demo parses and scores the numbers locally; it does not send or store your answers. General site analytics are subject to your consent and do not receive this form’s values.

Answers in item order (JSON array)Exactly 36 whole numbers from 1 to 5. The examples are synthetic, not participant data.

[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]Score answersAll neutralType 5 exampleTypes 1 + 5 tie

```

```

Enable JavaScript to try the demo, or download the scorer and run it in Node. All questions and documentation remain readable below.

## Use the scorer in Node or a browser.

        Save score.js, then run this from the same directory in a CommonJS script or the Node console:

const { score } = require(&#x27;./score.js&#x27;);
const answers = Array(36).fill(3);
answers.fill(5, 16, 20); // example: type 5 items, IDs 17–20
console.log(score(answers));
// leaders: [5], dominantType: 5, topScore: 20

For a project with "type": "module", save the file as score.cjs and import its CommonJS default. In a browser, load the file before calling its global:

<script src="./score.js"></script>
<script>
  const result = AgentTuneEnneagram.score(Array(36).fill(3));
  console.log(result.leaders); // all nine types tie
</script>

If you randomize display order, store the response against its item ID and reconstruct IDs 1–36 before calling score. The scorer accepts a plain array, not an object keyed by question text.

## The scoring contract.

        Each type has four items scored from 1 to 5. Sum the four responses; there are no reversed items in this adaptation. A type total ranges from 4 to 20.

| Output | Meaning |

| version | agenttune-enneagram-36-v1: identify the item order and rules. |

| scores | Raw totals keyed by type number 1–9. |

| topScore | The greatest of the nine raw totals. |

| leaders | Every type that has that total, in ascending numeric order. |

| tied | True when more than one type shares the highest total. |

| dominantType | The unique leader, or null for a tie. |

The scorer rejects incomplete arrays, sparse arrays, strings, fractions and values outside 1–5. Do not turn a skipped answer into a neutral response. A score is not a probability, percentile or confidence estimate. This module does not calculate wings; the second-highest type is not automatically a wing.

## Why equal scores stay equal.

        All-neutral answers give each type 12 points. Assigning Type 1 because it appears first would manufacture a result. Show all nine totals and let the user inspect the tied types instead.

This also matters in our [model questionnaire study](https://agent-tune.com/research/ai-personality-five-models-2026): 65 of 100 Opus 5.5 Enneagram assessments and 44 of 100 Fable 5.1 assessments had tied top scores. Those are exploratory model self-reports, not validation of the questionnaire for AI. The downloadable scorer is checked against every saved Enneagram answer vector in that dataset.

## All 36 questions and their keys.

        The wording and order below match the version used by the AgentTune test and September 2026 response dataset. Record answers on this scale: 1 strongly disagree, 2 disagree, 3 neutral, 4 agree, 5 strongly agree.

| ID | Statement | Type |

| 1 | I am a perfectionist. | 1 |

| 2 | I strive for efficiency. | 1 |

| 3 | I often have to redo other people&#x27;s work. | 1 |

| 4 | I keep my belongings in order. | 1 |

| 5 | My relationships with others are what my life is about. | 2 |

| 6 | I have difficulty saying no. | 2 |

| 7 | I get lots of satisfaction from helping others achieve their goals. | 2 |

| 8 | I put family first. | 2 |

| 9 | I put work first. | 3 |

| 10 | I like to stand out. | 3 |

| 11 | It is good to wake up to a full day of planned activities. | 3 |

| 12 | Money is important to my happiness. | 3 |

| 13 | I daydream about being in love. | 4 |

| 14 | I really enjoy feeling bittersweet. | 4 |

| 15 | I get deeply immersed in music. | 4 |

| 16 | I side with the rebels over the establishment. | 4 |

| 17 | I have a hard time showing emotions. | 5 |

| 18 | I spend hours alone with my hobbies. | 5 |

| 19 | I spend most of my time trying to understand things. | 5 |

| 20 | I like mental challenges. | 5 |

| 21 | Fear of being taken advantage of keeps me from being more trusting. | 6 |

| 22 | I get input from others before I make a decision. | 6 |

| 23 | I conform. | 6 |

| 24 | I am loyal. | 6 |

| 25 | I must always be having new experiences. | 7 |

| 26 | I can keep a conversation going with anyone about anything. | 7 |

| 27 | I am uninhibited. | 7 |

| 28 | I always try to break the tension with a good joke. | 7 |

| 29 | I naturally emerge as a leader. | 8 |

| 30 | I like a conversation where no one agrees. | 8 |

| 31 | I want people to tell me the truth, not spare my feelings. | 8 |

| 32 | I come up with good solutions. | 8 |

| 33 | When other people are arguing, I leave the room. | 9 |

| 34 | I keep my thoughts to myself to prevent trouble. | 9 |

| 35 | I am very accepting and flexible. | 9 |

| 36 | I avoid confrontation. | 9 |

## Provenance, scope and licensing.

        AgentTune uses a 36-item adaptation of material attributed to the Open-Source Psychometrics Project’s OEPS. The upstream live test currently specifies 54 items. This resource reproduces AgentTune’s existing item set; it is not the complete upstream assessment. We have not established psychometric validity for this shortened selection.

The JavaScript implementation is MIT licensed. The questionnaire wording retains its upstream terms; our code license does not relicense third-party text. Keep the attribution and version with the question data, and consult the [upstream development documentation](https://openpsychometrics.org/tests/OEPS/development/) for its source. This is not the proprietary RHETI test.

Use the results as an educational prompt for reflection. Do not present them as a diagnosis, hiring assessment or proof that an AI has a human personality. For a user-facing integration, explain where answers go, make every question keyboard accessible, and show tied results explicitly.

## Questions people ask.

            Where is the Enneagram test source code on GitHub?

            The developer files live in bernardjhuang/agenttune-website under resources/enneagram. The separate bernardjhuang/agenttune library includes tests/enneagram.md with the questionnaire specification.

            Does the scorer work without a server?

            Yes. Load score.js in a browser and call AgentTuneEnneagram.score(answers), or require it in Node. The scorer makes no network requests and stores no responses.

            Is this the full OEPS test?

            No. It reproduces the 36-item adaptation already used by AgentTune. The upstream live OEPS has 54 items. Results from these versions should not be treated as interchangeable.

            What happens when two Enneagram types tie?

            Both remain in leaders and dominantType is null. Show the tied scores; do not silently choose the first type or automatically export one tuning.

            Is everything in the download MIT licensed?

            The AgentTune JavaScript implementation is MIT licensed. The question wording is attributed to the Open-Source Psychometrics Project and retains its upstream terms. The code license does not relicense third-party questionnaire text.

## What changed.

- September 25, 2026 First published with downloadable resources.

## Sources.

- [Open-Source Psychometrics Project: OEPS live test (54 items)](https://openpsychometrics.org/tests/OEPS/)

- [Eric Jorgenson: development of the OEPS](https://openpsychometrics.org/tests/OEPS/development/)

- [AgentTune: versioned response data and methods](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

          [New resourceBuild an Enneagram test in React + TypeScript](https://agent-tune.com/guides/enneagram-test-react-typescript)
          [Try itTake the 36-item Enneagram test](https://agent-tune.com/tests/enneagram)
          [Apply itEnneagram prompts for all nine types](https://agent-tune.com/guides/enneagram-ai-prompts)
          [ResearchWhy ties matter in model reports](https://agent-tune.com/research/ai-personality-five-models-2026)
