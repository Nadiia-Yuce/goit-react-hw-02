import css from "./Feedback.module.css";
export default function Feedback({ options, positive }) {
  return (
    <div>
      <p className={css.feedback}>Good: {options.good}</p>
      <p className={css.feedback}>Neutral: {options.neutral}</p>
      <p className={css.feedback}>Bad: {options.bad}</p>
      <p className={css.feedback}>Positive: {positive}%</p>
    </div>
  );
}
