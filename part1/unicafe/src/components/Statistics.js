import React from "react";
import StatisticLine from "./StatisticLine.js";

function Statistics({ good, neutral, bad }) {
  let sum = good + neutral + bad;
  let positive = (good / sum) * 100;

  let statistics;
  // conditional rendering
  if (sum === 0) {
    statistics = <p>No Feedback given</p>;
  } else {
    statistics = (
      <>
        <StatisticLine innerText="good" statistic={good} />
        <StatisticLine innerText="neutral" statistic={neutral} />
        <StatisticLine innerText="bad" statistic={bad} />
        <StatisticLine innerText="all" statistic={sum} />
        <StatisticLine innerText="positive" statistic={positive} percent="%" />
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
