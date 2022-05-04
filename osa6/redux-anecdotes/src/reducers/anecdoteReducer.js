import anecdoteService from "../services/anecdotes";

const anecdotesAtStart = [];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "SETANC":
      return action.data;
    case "NEW_ANEC":
      return [...state, action.data].sort((a, b) => b.votes - a.votes);
    case "VOTE":
      const id = action.data.id;
      const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      const anecdotes = state.map((a) => (a.id !== id ? a : changedAnecdote));
      return [...anecdotes].sort((a, b) => b.votes - a.votes);
    default:
      return state;
  }
};

export const createAnecdote = (d) => {
  return {
    type: "NEW_ANEC",
    data: {
      content: d.content,
      id: d.id,
      votes: 0,
    },
  };
};

export const voteA = (id) => {
  return {
    type: "VOTE",
    data: { id },
  };
};

export const setAnecdotes = (d) => {
  return {
    type: "SETANC",
    data: d,
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export default reducer;
