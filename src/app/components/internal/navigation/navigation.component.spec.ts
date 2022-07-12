import { render, screen } from '@testing-library/angular'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { IconModule } from '../../external/icon/icon.module'
import { ItemModule } from '../../external/item/item.module'
import { ListModule } from '../../external/list/list.module'
import { LogoCardModule } from '../logo-card/logo-card.module'
import { NavigationComponent } from './navigation.component'
import { TitleModule } from '../../external/title/title.module'

describe('NavigationComponent', () => {
  const { getByLabelText } = screen
  it('should create a navigation component', async () => {
    await render(`<cebs-navigation></cebs-navigation>`, {
      declarations: [NavigationComponent],
      imports: [
        LogoCardModule,
        TitleModule,
        ListModule,
        ItemModule,
        IconModule,
        HttpClientTestingModule,
      ],
    })

    expect(getByLabelText(/navigation/i)).toBeInTheDocument()
  })
})
