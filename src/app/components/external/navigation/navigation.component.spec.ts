import { render, screen } from '@testing-library/angular'

import { IconModule } from '../icon/icon.module'
import { ItemModule } from '../item/item.module'
import { ListModule } from '../list/list.module'
import { LogoCardModule } from '../../internal/logo-card/logo-card.module'
import { NavigationComponent } from './navigation.component'
import { TitleModule } from '../title/title.module'

describe('NavigationComponent', () => {
  const { getByLabelText } = screen
  it('should create a navigation component', async () => {
    await render(`<cebs-navigation></cebs-navigation>`, {
      declarations: [NavigationComponent],
      imports: [LogoCardModule, TitleModule, ListModule, ItemModule, IconModule],
    })

    expect(getByLabelText(/navigation/i)).toBeInTheDocument()
  })
})
