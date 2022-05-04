import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNote } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const NewAnecdote = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdoteService.createNew(content);
    console.log(newAnecdote);
    dispatch(createAnecdote(newAnecdote));
    dispatch(setNote("Anecdote added"));
    setTimeout(() => {
      dispatch(setNote(""));
    }, 5000);
  };

  return (
    <form onSubmit={addAnecdote}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default NewAnecdote;
