import React from "react";

function Statistics({ good, neutral, bad }) {
  let sum = good + neutral + bad;

  let statistics;
  // conditional rendering
  if (sum === 0) {
    statistics = <p>No Feedback given</p>;
  } else {
    statistics = (
      <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {sum}</p>
        <p>positive {(good / sum) * 100} %</p>
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      {statistics}
    </>
  );
}

export default Statistics;
