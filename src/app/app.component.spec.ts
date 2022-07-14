import { AppComponent } from './app.component'
import { RouterTestingModule } from '@angular/router/testing'
import { render } from '@testing-library/angular'

describe('AppComponent', () => {
  const setup = () => {
    return render(AppComponent, {
      imports: [RouterTestingModule],
    })
  }

  it('should create the app', async () => {
    const { fixture } = await setup()

    expect(fixture.componentInstance).toBeTruthy()
  })

  it('should init the app with network online', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true)
    const { fixture } = await setup()

    expect(fixture.componentInstance.isOnline).toBe(true)
  })

  it('should init the app with network offline', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false)
    const { fixture } = await setup()

    expect(fixture.componentInstance.isOnline).toBe(false)
  })
})
