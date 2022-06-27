import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.elementType.isRequired,
};
export default FeedbackOptions;
