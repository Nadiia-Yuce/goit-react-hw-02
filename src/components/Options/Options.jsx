import css from "./Options.module.css";
// Надя! Не забувай деструктуризувати об'єкт пропсів!!!
export default function Options({ update, reset, total }) {
  return (
    <div>
      <button className={css.btn} onClick={() => update("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => update("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => update("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
