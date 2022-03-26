import { useState } from 'react'

const Blog = ({ blog, addLike, removeBlog, username }) => {
  const [visible, setVisible] = useState(false)
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div>
        {blog.title} <div>{blog.author}</div>
      </div>
      <button onClick={toggleVisibility}>{visible ? 'hide' : 'view'}</button>
      <div style={showWhenVisible} className="togglableContent">
        <div>{blog.url}</div>
        <br></br>
        <div>
          likes {blog.likes} <button onClick={addLike}>like</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
