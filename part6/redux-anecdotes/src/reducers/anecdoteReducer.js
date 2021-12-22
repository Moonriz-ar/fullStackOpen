import initialState from "../data.js";

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

export default reducer;
