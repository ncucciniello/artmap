import { render } from '@redwoodjs/testing'

import FeedPage from './FeedPage'

describe('FeedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedPage />)
    }).not.toThrow()
  })
})
