import { render, screen } from '@testing-library/angular'

import { IconButtonComponent } from './icon-button.component'

describe('IconButtonComponent', () => {
  const { getByLabelText } = screen
  it('should create a icon button default', async () => {
    await render(
      `<cebs-icon-button icon="search" ariaLabel="icon-button"></cebs-icon-button>`,
      {
        declarations: [IconButtonComponent],
      }
    )

    expect(getByLabelText('icon-button')).toHaveClass('default')
  })

  it('should create a icon button primary', async () => {
    await render(
      `<cebs-icon-button icon="search" ariaLabel="icon-button" color="primary"></cebs-icon-button>`,
      {
        declarations: [IconButtonComponent],
      }
    )

    expect(getByLabelText('icon-button')).toHaveClass('primary')
  })

  it('should create a icon button with rounded', async () => {
    await render(
      `<cebs-icon-button [rounded]="true" icon="search" ariaLabel="icon-button" color="primary"></cebs-icon-button>`,
      {
        declarations: [IconButtonComponent],
      }
    )

    expect(getByLabelText('icon-button')).toHaveClass('primary', 'rounded')
  })
})
