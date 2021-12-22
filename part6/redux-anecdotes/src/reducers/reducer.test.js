import deepFreeze from "deep-freeze";
import anecdoteReducer from "./anecdoteReducer";
import initialState from "../data.js";

describe("anecdote reducer", () => {
  test("should return a proper initial state when called with undefined state", () => {
    const action = {
      type: "DO_NOTHING",
    };
    const newState = anecdoteReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test("vote/incrementVote: anecdote vote is incremented", () => {
    const state = [
      {
        content: "If it hurts, do it more often",
        id: 1,
        votes: 0,
      },
      {
        content: "Adding manpower to a late software project makes it later!",
        id: 2,
        votes: 0,
      },
    ];

    const action = (id) => {
      return {
        type: "vote/incrementVote",
        id: id,
      };
    };

    deepFreeze(state);
    const newState = anecdoteReducer(state, action(2));

    expect(newState).toHaveLength(2);

    expect(newState).toContainEqual(state[0]);

    expect(newState).toContainEqual({
      content: "Adding manpower to a late software project makes it later!",
      id: 2,
      votes: 1,
    });
  });
});
