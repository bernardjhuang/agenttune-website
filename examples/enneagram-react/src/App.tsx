import { useEffect, useRef, useState, type FormEvent } from 'react';
import questions from './questions.json';
import { scoreAnswers, type Score } from './scorer';
const perPage = 6;
const options = ['Demo value 1','Demo value 2','Demo value 3','Demo value 4','Demo value 5'];
export function App() {
  const [answers,setAnswers] = useState<(number|null)[]>(Array(questions.items.length).fill(null));
  const [page,setPage] = useState(0);
  const [result,setResult] = useState<Score|null>(null);
  const [error,setError] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);
  const pages = Math.ceil(questions.items.length/perPage);
  const items = questions.items.slice(page*perPage,(page+1)*perPage);
  useEffect(()=> { if(mounted.current) heading.current?.focus(); mounted.current=true; },[page,result]);
  function submit(event:FormEvent) {
    event.preventDefault();
    const missing = items.find(q=>answers[q.id-1]===null);
    if(missing) { setError(`Choose an answer for question ${missing.id} before continuing.`); document.getElementById(`q${missing.id}-1`)?.focus(); return; }
    setError('');
    if(page<pages-1) {setPage(page+1);return;}
    try { setResult(scoreAnswers(answers as number[])); } catch(err) {setError(err instanceof Error?err.message:'Unable to score these answers.');}
  }
  function reset() {setAnswers(Array(questions.items.length).fill(null));setError('');setPage(0);setResult(null);}
  return <main>
    <p className="eyebrow">AgentTune · React + TypeScript starter</p>
    <h1>Nine-group scoring demo</h1>
    <p>An original synthetic UI example, not a personality questionnaire. The values test software behavior and measure no traits. Answers stay in this page’s memory and disappear when you reload.</p>
    {result ? <section aria-labelledby="results-heading">
      <h2 id="results-heading" ref={heading} tabIndex={-1}>Demo result</h2>
      <p>{result.tied ? `Tied highest scores: groups ${result.leaders.join(', ')}.` : `Highest score: group ${result.dominantType}.`} Each leading type scored {result.topScore} out of 20.</p>
      <p>A tie remains a tie. This demo does not infer a wing, a percentile, or a definitive personality type.</p>
      <table><caption>All nine raw scores (possible range 4–20)</caption><thead><tr><th scope="col">Type</th><th scope="col">Score</th></tr></thead><tbody>{Object.entries(result.scores).map(([type,value])=><tr key={type}><th scope="row">Group {type}</th><td>{value} / 20{result.leaders.includes(Number(type))?' · highest':''}</td></tr>)}</tbody></table>
      <button onClick={reset}>Start again</button>
    </section> : <form onSubmit={submit} noValidate>
      <h2 ref={heading} tabIndex={-1}>Page {page+1} of {pages}</h2>
      <p>{answers.filter(a=>a!==null).length} of {questions.items.length} answered. Choose one response per statement.</p>
      {items.map(q=><fieldset key={q.id}><legend>{q.id}. {q.text}</legend>{options.map((label,i)=><label key={label}><input id={`q${q.id}-${i+1}`} type="radio" name={`question-${q.id}`} value={i+1} checked={answers[q.id-1]===i+1} onChange={()=>{setAnswers(previous=>previous.map((a,index)=>index===q.id-1?i+1:a));setError('');}} /> <span>{label}</span></label>)}</fieldset>)}
      <p role="alert" className="error">{error}</p>
      <div className="actions">{page>0&&<button type="button" onClick={()=>{setError('');setPage(page-1);}}>Back</button>}<button type="submit">{page===pages-1?'Show results':'Next page'}</button></div>
    </form>}
    <footer><p>Code and synthetic placeholders: MIT. Real questionnaire content is not included; obtain the applicable rights before adding an instrument.</p><a href="https://agent-tune.com/guides/enneagram-test-react-typescript">Read the starter guide</a></footer>
  </main>;
}
