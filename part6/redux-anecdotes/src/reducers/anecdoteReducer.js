import initialState from "../data.js";
import { v4 as uuidv4 } from "uuid";

// reducer
const reducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    // example how to change in inmmutable way item with specific id
    case "vote/incrementVote":
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

export const vote = (id) => {
  console.log("vote", id);
  return {
    type: "vote/incrementVote",
    id: id,
  };
};

export const addAnecdote = (event) => {
  const content = event.target.anecdote.value;
  const id = uuidv4();
  event.target.anecdote.value = "";
  return {
    type: "anecdote/addAnecdote",
    payload: {
      id,
      content,
      votes: 0,
    },
  };
};

export default reducer;
