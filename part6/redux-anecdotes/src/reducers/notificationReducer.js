const initialState = "";

// reducer
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "notification/vote":
      return action.payload;
    case "notification/addAnecdote":
      return action.payload;
    case "notification/reset":
      return "";
    default:
      return state;
  }
};

// action creator
export const voteNotification = (content) => {
  return {
    type: "notification/vote",
    payload: content,
  };
};

export const addAnecdoteNotification = (event) => {
  const content = event.target.anecdote.value;
  return {
    type: "notification/addAnecdote",
    payload: content,
  };
};

export const resetNotification = () => {
  return {
    type: "notification/reset",
  };
};

export default notificationReducer;
