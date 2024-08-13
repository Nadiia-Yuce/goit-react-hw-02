import css from "./Options.module.css";
// Надя! Не забувай деструктуризувати об'єкт пропсів!!!
export default function Options({
  children,
  update,
  reset,
  type,
  action = "update",
}) {
  function handleClick() {
    if (action === "update") {
      update(type);
    } else if (action === "reset") {
      reset();
    }
  }

  return (
    <button className={css.btn} onClick={handleClick}>
      {children}
    </button>
  );
}
