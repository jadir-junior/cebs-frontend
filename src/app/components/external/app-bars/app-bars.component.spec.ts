import { ComponentFixture, TestBed } from '@angular/core/testing'
import { render, screen } from '@testing-library/angular'

import { AppBarsComponent } from './app-bars.component'

describe('AppBarsComponent', () => {
  it('should create a cebs-app-bars with content and default styles', async () => {
    const { getByText, getByLabelText } = screen
    await render(`<cebs-app-bars>app-bars working!</cebs-app-bars>`, {
      declarations: [AppBarsComponent],
    })

    expect(getByText(/app-bars working!/i)).toBeInTheDocument()
    expect(getByLabelText(/app-bars/i)).toHaveClass('bar')
  })
})
