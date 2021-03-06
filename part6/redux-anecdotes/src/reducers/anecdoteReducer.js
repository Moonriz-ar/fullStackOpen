import initialState from "../data.js";
import { v4 as uuidv4 } from "uuid";
import { selectFilter } from "./filterReducer.js";

// reducer
const anecdoteReducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    // example how to change in inmmutable way item with specific id
    case "anecdote/incrementVote":
      const id = action.id;
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    case "anecdote/addAnecdote":
      return [...state, action.payload];
    default:
      return state;
  }
};

// action creators
export const vote = (id) => {
  console.log("vote", id);
  return {
    type: "anecdote/incrementVote",
    id: id,
  };
};

export const addAnecdote = (event) => {
  const content = event.target.anecdote.value;
  const id = uuidv4();
  return {
    type: "anecdote/addAnecdote",
    payload: {
      id,
      content,
      votes: 0,
    },
  };
};

// selectors
export const selectAllAnecdotes = (state) => state.anecdote;

export const selectAllFilteredAnecdotes = (state) => {
  const allAnecdotes = selectAllAnecdotes(state);
  const filter = selectFilter(state);

  return allAnecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export default anecdoteReducer;
