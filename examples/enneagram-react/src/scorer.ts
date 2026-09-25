export interface Score {
  version: string;
  scores: Record<string, number>;
  topScore: number;
  leaders: number[];
  tied: boolean;
  dominantType: number | null;
}
declare global { interface Window { AgentTuneEnneagram: {score: (answers: number[]) => Score}; } }
// index.html loads the unchanged canonical UMD scorer from public/score.js.
// TypeScript only describes its public contract; there is no second scoring implementation.
export function scoreAnswers(answers: number[]): Score {
  if (!window.AgentTuneEnneagram) throw new Error('The scoring file did not load. Reload this page and try again.');
  return window.AgentTuneEnneagram.score(answers);
}
