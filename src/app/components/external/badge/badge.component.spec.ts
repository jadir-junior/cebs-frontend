import { render, screen } from '@testing-library/angular'

import { BadgeComponent } from './badge.component'

describe('BadgeComponent', () => {
  const { getByText, getByRole } = screen
  it('should create a component badge with content', async () => {
    await render(`<cebs-badge [ariaLabel]="badge">6</cebs-badge>`, {
      declarations: [BadgeComponent],
    })

    expect(getByRole('status')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
  })

  it('render a badge primary', async () => {
    await render(`<cebs-badge [ariaLabel]="badge" color="primary">6</cebs-badge>`, {
      declarations: [BadgeComponent],
    })

    expect(getByRole('status')).toHaveClass('primary')
  })

  it('render a badge with pill', async () => {
    await render(
      `<cebs-badge [ariaLabel]="badge" color="primary" [pill]="true">6</cebs-badge>`,
      {
        declarations: [BadgeComponent],
      }
    )

    expect(getByRole('status')).toHaveClass('pill')
  })
})
