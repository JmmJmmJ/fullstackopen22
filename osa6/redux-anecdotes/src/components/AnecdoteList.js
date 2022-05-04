import { useDispatch, useSelector } from "react-redux";
import { voteA } from "../reducers/anecdoteReducer";
import { setNote } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === "") {
      return anecdotes;
    }
    return anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const vote = (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    console.log("vote", id);
    dispatch(voteA(id));
    dispatch(setNote(`You voted "${anecdote.content}"`));
    setTimeout(() => {
      dispatch(setNote(""));
    }, 5000);
  };

  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  ));
};

export default AnecdoteList;
