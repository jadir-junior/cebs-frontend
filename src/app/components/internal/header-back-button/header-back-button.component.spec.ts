import { render, screen } from '@testing-library/angular'

import { HeaderBackButtonComponent } from './header-back-button.component'
import { IconButtonComponent } from '../../external/icon-button/icon-button.component'
import { Location } from '@angular/common'
import { TestBed } from '@angular/core/testing'
import userEvent from '@testing-library/user-event'

describe('HeaderBackButtonComponent', () => {
  it('should render a header back button component', async () => {
    await render(HeaderBackButtonComponent, {
      declarations: [IconButtonComponent],
    })

    expect(screen.getByLabelText(/back button/i)).toBeDefined()
    expect(screen.getByLabelText(/icon button/i)).toBeDefined()
  })

  it('should call a Location.back when user click in the button', async () => {
    await render(HeaderBackButtonComponent, {
      declarations: [IconButtonComponent],
    })

    const location = TestBed.inject(Location)
    jest.spyOn(location, 'back')

    const button = screen.getByLabelText(/icon button/i)
    await userEvent.click(button)
    expect(location.back).toHaveBeenCalled()
  })
})
