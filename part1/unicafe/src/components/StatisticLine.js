import React from "react";

function StatisticLine({ innerText, statistic, percent }) {
  return (
    <tr>
      <td>{innerText}</td>
      <td>
        {statistic}
        {percent}
      </td>
    </tr>
  );
}

export default StatisticLine;
