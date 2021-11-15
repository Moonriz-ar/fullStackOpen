import React, { useState } from "react";
import Feedback from "./components/Feedback.js";
import Statistics from "./components/Statistics.js";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleClick(feedbackType) {
    const handleClickFeedback = () => {
      if (feedbackType === "good") {
        setGood(good + 1);
        console.log(good);
      } else if (feedbackType === "neutral") {
        setNeutral(neutral + 1);
        console.log(neutral);
      } else if (feedbackType === "bad") {
        setBad(bad + 1);
        console.log(bad);
      }
    };
    return handleClickFeedback;
  }

  return (
    <>
      <Feedback handleClick={handleClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;

// let setFeedback = "set" + feedback[0].toUpperCase + feedback.slice(1);
// setFeedback(feedback + 1);
// console.log(feedback);
