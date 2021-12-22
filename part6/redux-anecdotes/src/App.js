import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const sortedAnecdotes = () => {
    return anecdotes.slice().sort((a, b) => b.votes - a.votes);
  };
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch({
      type: "vote/incrementVote",
      id: id,
    });
  };

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    const id = uuidv4();
    event.target.anecdote.value = "";
    dispatch({
      type: "anecdote/addAnecdote",
      payload: {
        id,
        content,
        votes: 0,
      },
    });
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes().map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
