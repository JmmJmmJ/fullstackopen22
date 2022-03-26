import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('<Blog />', () => {
  let container
  const mockHandler = jest.fn()

  beforeEach(() => {
    const blog = {
      user: 'Test',
      likes: 978,
      author: 'Abc',
      title: 'BlogTest',
      url: '2221',
    }

    container = render(
      <Blog
        key="9"
        blog={blog}
        addLike={mockHandler}
        removeBlog={() => removeBlog()}
        username={blog.user}
      />
    ).container
  })

  test('renders content', () => {
    const element = screen.getByText('Abc')
    const element2 = screen.getByText('BlogTest')
  })

  test('at start the url and likes are not displayed', () => {
    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
    expect(div).toHaveTextContent('2221')
    expect(div).toHaveTextContent('978')
  })

  test('after clicking the button url and likes are displayed', () => {
    const button = screen.getByText('view')
    userEvent.click(button)

    const div = container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })

  test('clicking the button calls event handler', async () => {
    const button1 = screen.getByText('view')
    userEvent.click(button1)

    const button = screen.getByText('like')
    userEvent.click(button)
    userEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(2)
  })
})
