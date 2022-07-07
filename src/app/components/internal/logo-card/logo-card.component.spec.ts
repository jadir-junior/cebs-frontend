import { render, screen } from '@testing-library/angular'

import { LogoCardComponent } from './logo-card.component'
import { LogoModule } from '../logo/logo.module'

describe('LogoCardComponent', () => {
  const { getByLabelText } = screen
  it('should create a logo card component', async () => {
    await render(`<cebs-logo-card width="50px" height="50px"></cebs-logo-card>`, {
      declarations: [LogoCardComponent],
      imports: [LogoModule],
    })

    expect(getByLabelText(/logo card/i)).toBeInTheDocument()
    expect(getByLabelText(/logo card/i)).toHaveStyle({ width: '50px', height: '50px' })
  })
})
