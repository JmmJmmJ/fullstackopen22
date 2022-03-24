import { useState } from "react";

const Test = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const addBlog = (event) => {
    event.preventDefault();
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: "0",
    });

    setNewAuthor("");
    setNewTitle("");
    setNewAuthor("");
  };

  const handleTittleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value);
  };

  return (
    <form onSubmit={addBlog}>
      title:
      <input value={newTitle} onChange={handleTittleChange} />
      <br></br>
      author:
      <input value={newAuthor} onChange={handleAuthorChange} />
      <br></br>
      url:
      <input value={newUrl} onChange={handleUrlChange} />
      <br></br>
      <button type="submit">create</button>
    </form>
  );
};

export default Test;
