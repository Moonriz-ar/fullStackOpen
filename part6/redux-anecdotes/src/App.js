import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote } from "./reducers/anecdoteReducer";

import AnecdoteForm from "./components/AnecdoteForm";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const sortedAnecdotes = () => {
    return anecdotes.slice().sort((a, b) => b.votes - a.votes);
  };
  const dispatch = useDispatch();

  const voteHandler = (id) => {
    dispatch(vote(id));
  };

  return (
    <>
      <h2>Anecdotes</h2>
      {sortedAnecdotes().map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteHandler(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <AnecdoteForm />
    </>
  );
};

export default App;
