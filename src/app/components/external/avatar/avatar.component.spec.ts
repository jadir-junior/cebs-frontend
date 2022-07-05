import { render, screen } from '@testing-library/angular'

import { AvatarComponent } from './avatar.component'

describe('AvatarComponent', () => {
  const { getByLabelText, getByRole } = screen

  it('should create avatar component with default props', async () => {
    await render(`<cebs-avatar photo="fake-image.jpg" name="fake"></cebs-avatar>`, {
      declarations: [AvatarComponent],
    })

    expect(getByLabelText('avatar')).toBeInTheDocument()
    expect(getByLabelText('avatar')).toHaveClass('medium')
    expect(getByRole('img', { name: 'fake' })).toBeInTheDocument()
    expect(getByRole('img', { name: 'fake' })).toHaveAttribute('src', 'fake-image.jpg')
  })

  it('should create avatar with small size', async () => {
    await render(
      `<cebs-avatar photo="fake-image.jpg" name="fake" size="small"></cebs-avatar>`,
      {
        declarations: [AvatarComponent],
      }
    )

    expect(getByLabelText('avatar')).toHaveClass('small')
  })
})
