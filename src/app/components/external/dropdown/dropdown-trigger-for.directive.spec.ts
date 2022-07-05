import { render, screen, waitFor } from '@testing-library/angular'

import { DropdownModule } from './dropdown.module'
import userEvent from '@testing-library/user-event'

describe('DropdownTriggerForDirective', () => {
  const { getByText, findByText, getByRole, getByLabelText } = screen
  it('should create a component and testing a directive', async () => {
    await render(
      `<div aria-label="close"><button role="button" [dropdownTriggerFor]="menu">Dropdown</button><cebs-dropdown #menu><div>Content Dropdown</div></cebs-dropdown></div>`,
      {
        imports: [DropdownModule],
      }
    )

    waitFor(() => expect(findByText('Content Dropdown')).not.toBeInTheDocument())

    const buttonDropdown = getByRole('button', { name: 'Dropdown' })

    await userEvent.click(buttonDropdown)

    expect(getByText(/content dropdown/i)).toBeInTheDocument()

    // click out of dropdown should close
    await userEvent.click(getByLabelText('close'))

    waitFor(() => expect(findByText(/content dropdown/i)).not.toBeInTheDocument())
  })
})
