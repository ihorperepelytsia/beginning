import React, { useState } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Sections from "../Section/Section";
import Notification from "../Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onChangeValue = ({ target: { name } }) => {
    if (name === "good") {
      setGood(good + 1);
    }
    if (name === "bad") {
      setBad(bad + 1);
    }
    if (name === "neutral") {
      setNeutral(neutral + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;
  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return countTotalFeedback(good, neutral, bad) > 0
      ? Math.round((good / countTotalFeedback(good, neutral, bad)) * 100)
      : 0;
  };
  return (
    <>
      <Sections title={"Please leave feedback"}>
        <FeedbackOptions onLeaveFeedback={onChangeValue} />
      </Sections>
      {countTotalFeedback(good, neutral, bad) > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(good, neutral, bad)}
          positivePercentage={countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
export default App;
