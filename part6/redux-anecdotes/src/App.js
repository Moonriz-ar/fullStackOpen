import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote, addAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const sortedAnecdotes = () => {
    return anecdotes.slice().sort((a, b) => b.votes - a.votes);
  };
  const dispatch = useDispatch();

  const voteHandler = (id) => {
    dispatch(vote(id));
  };

  const addAnecdoteHandler = (event) => {
    event.preventDefault();
    dispatch(addAnecdote(event));
  };

  return (
    <div>
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
      <h2>create new</h2>
      <form onSubmit={addAnecdoteHandler}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
