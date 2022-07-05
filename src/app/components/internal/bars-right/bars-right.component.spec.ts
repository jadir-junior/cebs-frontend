import { render, screen } from '@testing-library/angular'

import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { BarsRightComponent } from './bars-right.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { IconButtonModule } from '../../external/icon-button/icon-button.module'
import userEvent from '@testing-library/user-event'

describe('BarsRightComponent', () => {
  const { getAllByRole, getByRole } = screen
  const logoutSpy = jest.fn()

  beforeEach(async () => {
    await render(BarsRightComponent, {
      imports: [IconButtonModule, HttpClientTestingModule],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            logout: logoutSpy,
          },
        },
      ],
    })
  })

  it('should create cebs-bars-right with six icon buttons', async () => {
    expect(getAllByRole('button')).toHaveLength(6)
  })

  it('should logout when click on button light_mode', async () => {
    const buttonLogout = getByRole('button', { name: 'light_mode' })

    await userEvent.click(buttonLogout)

    expect(logoutSpy).toHaveBeenCalled()
  })
})
