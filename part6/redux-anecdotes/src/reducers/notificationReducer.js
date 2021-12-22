const initialState = "";

// reducer
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "notification/vote":
      return action.payload;
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

export default notificationReducer;
