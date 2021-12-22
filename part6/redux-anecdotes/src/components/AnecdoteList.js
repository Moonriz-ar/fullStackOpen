import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { voteNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const dispatch = useDispatch();

  const sortedAnecdotes = () => {
    return anecdotes.slice().sort((a, b) => b.votes - a.votes);
  };

  const buttonHandler = (id, content) => {
    dispatch(vote(id));
    dispatch(voteNotification(content));
  };

  return (
    <>
      {sortedAnecdotes().map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => buttonHandler(anecdote.id, anecdote.content)}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
