import { render, screen } from '@testing-library/angular'

import { ButtonComponent } from './button.component'

describe('ButtonComponent', () => {
  const { getByText, getByLabelText } = screen
  it('should create button component with default props', async () => {
    await render(`<cebs-button type="text" ariaLabel="button">Button</cebs-button>`, {
      declarations: [ButtonComponent],
    })

    expect(getByText(/button/i)).toBeInTheDocument()
    expect(getByLabelText(/button/i)).toBeInTheDocument()
    expect(getByLabelText(/button/i)).toHaveClass('default')
  })

  it('render a primary button', async () => {
    await render(
      `<cebs-button type="text" ariaLabel="button" color="primary">Button</cebs-button>`,
      {
        declarations: [ButtonComponent],
      }
    )

    expect(getByLabelText(/button/i)).toHaveClass('primary')
  })

  it('render a block button', async () => {
    await render(
      `<cebs-button type="text" ariaLabel="button" [block]="true">Button</cebs-button>`,
      {
        declarations: [ButtonComponent],
      }
    )

    expect(getByLabelText(/button/i)).toHaveClass('block')
  })
})
