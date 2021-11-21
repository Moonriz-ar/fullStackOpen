import React from "react";

function Anecdote({ headerText, anecdotes, votes, anecdoteShowed }) {
  return (
    <>
      <h1>{headerText}</h1>
      <p>{anecdotes[anecdoteShowed]}</p>
      <p>has {votes[anecdoteShowed]} votes</p>
    </>
  );
}

export default Anecdote;
