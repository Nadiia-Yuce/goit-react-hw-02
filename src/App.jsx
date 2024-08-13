import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import { useState } from "react";
import css from "./App.module.css";

export default function App() {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = options.good + options.neutral + options.bad;

  function updateFeedback(feedbackType) {
    setOptions({ ...options, [feedbackType]: options[feedbackType] + 1 });
  }

  function resetFeedback() {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className={css.container}>
      <Description />
      <Options update={updateFeedback} type="good">
        Good
      </Options>
      <Options update={updateFeedback} type="neutral">
        Neutral
      </Options>
      <Options update={updateFeedback} type="bad">
        Bad
      </Options>
      {totalFeedback > 0 && (
        <Options reset={resetFeedback} action="reset">
          Reset
        </Options>
      )}
      {totalFeedback ? (
        <Feedback options={options} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
