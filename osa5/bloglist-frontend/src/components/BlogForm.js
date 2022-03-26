import { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: '0',
    })

    setNewAuthor('')
    setNewTitle('')
    setNewAuthor('')
  }

  const handleTittleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  return (
    <form onSubmit={addBlog}>
      title:
      <input
        id="title"
        value={newTitle}
        onChange={handleTittleChange}
        placeholder="Title"
      />
      <br></br>
      author:
      <input
        id="author"
        value={newAuthor}
        onChange={handleAuthorChange}
        placeholder="Author"
      />
      <br></br>
      url:
      <input
        id="url"
        value={newUrl}
        onChange={handleUrlChange}
        placeholder="Url"
      />
      <br></br>
      <button type="submit">create</button>
    </form>
  )
}

export default BlogForm
