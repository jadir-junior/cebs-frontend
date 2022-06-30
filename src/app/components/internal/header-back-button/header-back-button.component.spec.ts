import { Spectator, byLabel, byText, createComponentFactory } from '@ngneat/spectator'
import { render, screen } from '@testing-library/angular'

import { HeaderBackButtonComponent } from './header-back-button.component'
import { IconButtonComponent } from '../../external/icon-button/icon-button.component'
import { IconButtonModule } from '../../external/icon-button/icon-button.module'
import { Location } from '@angular/common'
import { MockModule } from 'ng-mocks'

describe('HeaderBackButtonComponent', () => {
  it('should render a header back button component', async () => {
    await render(HeaderBackButtonComponent)

    expect(screen.getByLabelText(/back button/gi)).toBeDefined()
  })
})
