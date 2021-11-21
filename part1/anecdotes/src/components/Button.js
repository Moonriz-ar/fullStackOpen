import React from "react";

function Button({ innerText, handleClick }) {
  return <button onClick={handleClick}>{innerText}</button>;
}

export default Button;
