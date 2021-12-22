import { createStore, combineReducers } from "redux";
import anecdoteReducer from "../reducers/anecdoteReducer";
import notificationReducer from "../reducers/notificationReducer";
import filterReducer from "../reducers/filterReducer";

const rootReducer = combineReducers({
  anecdote: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
