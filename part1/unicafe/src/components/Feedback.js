import React from "react";

function Feedback({ handleClick }) {
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleClick("good")}>good</button>
      <button onClick={handleClick("neutral")}>neutral</button>
      <button onClick={handleClick("bad")}>bad</button>
    </>
  );
}

export default Feedback;
