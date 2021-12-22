// reducer
const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "filter/setFilter":
      return action.payload;
    default:
      return state;
  }
};

// action creator
export const setFilter = (filter) => {
  return {
    type: "filter/setFilter",
    payload: filter,
  };
};

// selectors
export const selectFilter = (state) => state.filter;

export default filterReducer;
