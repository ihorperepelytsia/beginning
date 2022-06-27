import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Sections from "../Section/Section";
import Notification from "../Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeValue = ({ target: { name } }) =>
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return this.countTotalFeedback(good, neutral, bad) > 0
      ? Math.round((good / this.countTotalFeedback(good, neutral, bad)) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Sections title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={this.onChangeValue} />
        </Sections>
        {this.countTotalFeedback(good, neutral, bad) > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(good, neutral, bad)}
            positivePercentage={this.countPositiveFeedbackPercentage(
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
  }
}
