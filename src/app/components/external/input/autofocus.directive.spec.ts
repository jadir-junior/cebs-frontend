import { AutofocusDirective } from './autofocus.directive'
import { render } from '@testing-library/angular'

describe('AutofocusDirective', () => {
  it('should create an instance', async () => {
    await render('<input aria-label="input" [autoFocus]="true" />', {
      declarations: [AutofocusDirective],
    })
  })
})
