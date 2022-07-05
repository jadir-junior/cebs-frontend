import { render, screen } from '@testing-library/angular'

import { AppBarsModule } from '../../external/app-bars/app-bars.module'
import { BarsComponent } from './bars.component'
import { BarsRightModule } from '../bars-right/bars-right.module'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('BarsComponent', () => {
  const { getByLabelText } = screen
  it('should create a cebs-bars within cebs-app-bars and cebs-bars-rigth', async () => {
    await render(BarsComponent, {
      imports: [AppBarsModule, BarsRightModule, HttpClientTestingModule],
    })

    expect(getByLabelText(/app-bars/i)).toBeInTheDocument()
    expect(getByLabelText(/bars-right/i)).toBeInTheDocument()
  })
})
