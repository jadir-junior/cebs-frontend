import { render, screen } from '@testing-library/angular'

import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { AvatarModule } from '../../external/avatar/avatar.module'
import { DropdownUserAccountComponent } from './dropdown-user-account.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ItemModule } from '../../external/item/item.module'
import { ListModule } from '../../external/list/list.module'
import { RouterTestingModule } from '@angular/router/testing'
import { TagModule } from '../../external/tag/tag.module'
import { TextModule } from '../../external/text/text.module'
import { TitleModule } from '../../external/title/title.module'
import userEvent from '@testing-library/user-event'

const modules = [
  HttpClientTestingModule,
  RouterTestingModule,
  TitleModule,
  TextModule,
  AvatarModule,
  TagModule,
  ListModule,
  ItemModule,
]

describe('DropdownUserAccountComponent', () => {
  const { getByRole, getByLabelText } = screen
  const logoutSpy = jest.fn()

  beforeEach(async () => {
    await render(DropdownUserAccountComponent, {
      imports: [...modules],
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

  it('should create dropdown user account with components children', async () => {
    expect(getByRole('img', { name: 'Max Smith' })).toBeInTheDocument()
    expect(getByLabelText('name')).toBeInTheDocument()
    expect(getByLabelText('tag')).toBeInTheDocument()
    expect(getByLabelText('email')).toBeInTheDocument()
    expect(getByLabelText(/my profile/i)).toBeInTheDocument()
    expect(getByLabelText('account settings')).toBeInTheDocument()
    expect(getByLabelText('logout')).toBeInTheDocument()
  })

  it('when clicks in logout must logoff', async () => {
    const buttonLogout = getByLabelText('logout')

    await userEvent.click(buttonLogout)

    expect(logoutSpy).toHaveBeenCalled()
  })
})
