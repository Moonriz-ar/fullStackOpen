import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import {
  addAnecdoteNotification,
  resetNotification,
} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdoteHandler = (event) => {
    event.preventDefault();
    dispatch(addAnecdote(event));
    dispatch(addAnecdoteNotification(event));
    event.target.anecdote.value = "";

    const reset = () => {
      dispatch(resetNotification());
    };
    setTimeout(reset, 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdoteHandler}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
