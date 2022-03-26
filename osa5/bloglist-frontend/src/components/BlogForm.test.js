import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

describe('<BlogForm />', () => {
  test('<BlogForm /> updates parent state and calls onSubmit', () => {
    const createBlog = jest.fn()

    render(<BlogForm createBlog={createBlog} />)

    const inputTitle = screen.getByPlaceholderText('Title')
    const inputAuthor = screen.getByPlaceholderText('Author')
    const inputUrl = screen.getByPlaceholderText('Url')

    const sendButton = screen.getByText('create')

    userEvent.type(inputTitle, 'testT')
    userEvent.type(inputAuthor, 'testA')
    userEvent.type(inputUrl, 'testU')

    userEvent.click(sendButton)

    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0].title).toBe('testT')
    expect(createBlog.mock.calls[0][0].author).toBe('testA')
    expect(createBlog.mock.calls[0][0].url).toBe('testU')
  })
})
