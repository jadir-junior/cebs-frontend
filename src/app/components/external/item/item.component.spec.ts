import { render, screen } from '@testing-library/angular'

import { ItemComponent } from './item.component'

describe('ItemComponent', () => {
  const { getByText } = screen

  it('should create a item list component', async () => {
    await render(`<cebs-item>Item 1</cebs-item>`, {
      declarations: [ItemComponent],
    })

    expect(getByText(/item 1/i)).toBeInTheDocument()
  })
})
