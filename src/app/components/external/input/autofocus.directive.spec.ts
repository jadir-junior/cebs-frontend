import { SpectatorDirective, createDirectiveFactory } from '@ngneat/spectator'

import { AutofocusDirective } from './autofocus.directive'

describe('AutofocusDirective', () => {
  let spectator: SpectatorDirective<AutofocusDirective>
  const createDirective = createDirectiveFactory(AutofocusDirective)

  beforeEach(() => {
    spectator = createDirective(`<input [autoFocus]="true" />`)
  })
  it('should create an instance', () => {
    const instance = spectator.directive
    expect(instance).toBeDefined()
  })
})
