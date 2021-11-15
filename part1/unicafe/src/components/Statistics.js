import React from "react";

function Statistics({ good, neutral, bad }) {
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>positive {(good / (good + neutral + bad)) * 100} %</p>
    </>
  );
}

export default Statistics;
