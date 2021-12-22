import { createStore, combineReducers } from "redux";
import anecdoteReducer from "../reducers/anecdoteReducer";
import notificationReducer from "../reducers/notificationReducer";

const rootReducer = combineReducers({
  anecdote: anecdoteReducer,
  notification: notificationReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
