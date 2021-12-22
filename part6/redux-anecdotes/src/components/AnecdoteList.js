import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote, selectAllFilteredAnecdotes } from "../reducers/anecdoteReducer";
import {
  voteNotification,
  resetNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const filteredRecipes = useSelector(selectAllFilteredAnecdotes);

  const sortedAnecdotes = (array) => {
    return array.slice().sort((a, b) => b.votes - a.votes);
  };

  const buttonHandler = (id, content) => {
    dispatch(vote(id));
    dispatch(voteNotification(content));

    const reset = () => {
      dispatch(resetNotification());
    };
    setTimeout(reset, 5000);
  };

  return (
    <>
      {sortedAnecdotes(filteredRecipes).map((anecdote) => (
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
