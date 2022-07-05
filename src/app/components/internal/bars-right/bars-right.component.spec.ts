import { render, screen } from '@testing-library/angular'

import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { AvatarModule } from '../../external/avatar/avatar.module'
import { BarsRightComponent } from './bars-right.component'
import { DropdownModule } from '../../external/dropdown/dropdown.module'
import { DropdownUserAccountModule } from '../dropdown-user-account/dropdown-user-account.module'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { IconButtonModule } from '../../external/icon-button/icon-button.module'
import { WindowResizeModule } from 'src/app/common/window-resize/window-resize.module'
import userEvent from '@testing-library/user-event'

const modules = [
  HttpClientTestingModule,
  IconButtonModule,
  DropdownModule,
  DropdownUserAccountModule,
  AvatarModule,
  WindowResizeModule,
]

describe('BarsRightComponent', () => {
  const { getAllByRole } = screen

  beforeEach(async () => {
    await render(BarsRightComponent, {
      imports: [...modules],
    })
  })

  it('should create cebs-bars-right with six icon buttons', async () => {
    expect(getAllByRole('button')).toHaveLength(6)
  })
})
