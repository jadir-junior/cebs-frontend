import { render, screen } from '@testing-library/angular'

import { ListComponent } from './list.component'

describe('ListComponent', () => {
  const { getByText, getAllByRole } = screen
  it('should create a list with content', async () => {
    await render(`<cebs-list><li>Item 1</li><li>Item 2</li></cebs-list>`, {
      declarations: [ListComponent],
    })

    expect(getAllByRole('listitem')).toHaveLength(2)
    expect(getByText(/item 1/i)).toBeInTheDocument()
    expect(getByText(/item 2/i)).toBeInTheDocument()
  })
})
