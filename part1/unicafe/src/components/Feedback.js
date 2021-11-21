import React from "react";
import Button from "./Button.js";

function Feedback({ handleClick }) {
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleClick} innerText="good" />
      <Button handleClick={handleClick} innerText="neutral" />
      <Button handleClick={handleClick} innerText="bad" />
    </>
  );
}

export default Feedback;
