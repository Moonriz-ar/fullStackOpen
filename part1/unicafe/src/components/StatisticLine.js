import React from "react";

function StatisticLine({ innerText, statistic, percent }) {
  return (
    <p>
      {innerText} {statistic}
      {percent}
    </p>
  );
}

export default StatisticLine;
