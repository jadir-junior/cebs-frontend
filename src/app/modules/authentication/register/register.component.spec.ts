import { render, screen } from '@testing-library/angular'

import { AuthenticationService } from '../authentication.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { RegisterComponent } from './register.component'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedComponentsModule } from '../../../shared-components.module'
import { of } from 'rxjs'
import userEvent from '@testing-library/user-event'

const modules = [
  ReactiveFormsModule,
  RouterTestingModule,
  HttpClientTestingModule,
  SharedComponentsModule,
]

describe('RegisterComponent', () => {
  const { getByText, getByRole, getByLabelText } = screen
  const registerSpy = jest.fn()

  beforeEach(async () => {
    await render(RegisterComponent, {
      imports: [...modules],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            register: registerSpy,
          },
        },
      ],
    })
  })

  it('should create a page register with children components', async () => {
    expect(getByText('Crie uma Nova Conta')).toBeInTheDocument()
    expect(
      getByText('Crie uma nova conta para poder gerenciar suas contabilidades')
    ).toBeInTheDocument()
    expect(getByRole('textbox', { name: 'name' })).toBeInTheDocument()
    expect(getByRole('textbox', { name: 'email' })).toBeInTheDocument()
    expect(getByRole('textbox', { name: 'password' })).toBeInTheDocument()
    expect(getByRole('checkbox', { name: 'terms' })).toBeInTheDocument()
    expect(getByRole('submit', { name: 'register' })).toBeInTheDocument()
  })

  it('when user clicks on button submit without fill the fields must to show required errors', async () => {
    const submit = getByRole('submit', { name: 'register' })
    await userEvent.click(submit)

    expect(getByText(/o nome é obrigatório/i)).toBeInTheDocument()
    expect(getByText(/o email é obrigatório/i)).toBeInTheDocument()
    expect(getByText(/a senha é obrigatória/i)).toBeInTheDocument()
    expect(getByText(/é obrigatório concordar com os termos/i)).toBeInTheDocument()
    expect(registerSpy).not.toHaveBeenCalled()
  })

  it('should show the name error if a user enter with a name with less 3 characteres', async () => {
    const inputName = getByRole('textbox', { name: 'name' })
    const button = getByRole('submit', { name: 'register' })

    await userEvent.type(inputName, 'an')
    await userEvent.click(button)

    expect(getByText(/o nome deve conter no mínimo 3 letras/i)).toBeInTheDocument()
    expect(registerSpy).not.toHaveBeenCalled()
  })

  it('should show the email error if a user enter with a email incorrectly', async () => {
    const inputEmail = getByRole('textbox', { name: 'email' })
    const button = getByRole('submit', { name: 'register' })

    await userEvent.type(inputEmail, 'invalid-email')
    await userEvent.click(button)

    expect(getByText(/informe um e-mail valido/i)).toBeInTheDocument()
    expect(registerSpy).not.toHaveBeenCalled()
  })

  it('should show the password error if a user enter with a password incorrectly', async () => {
    const inputPassword = getByRole('textbox', { name: 'password' })
    const button = getByRole('submit', { name: 'register' })

    await userEvent.type(inputPassword, 'invalid-password')
    await userEvent.click(button)

    expect(getByText(/password should have minimum 8/i)).toBeInTheDocument()
    expect(registerSpy).not.toHaveBeenCalled()
  })

  it('toggle visible and hide password when clicks on button within input', async () => {
    const inputPassword = getByRole('textbox', { name: 'password' })
    const iconButtonInput = getByLabelText('append-icon-button')

    await userEvent.type(inputPassword, 'Alice123')

    expect(inputPassword).toHaveAttribute('type', 'password')

    await userEvent.click(iconButtonInput)

    expect(inputPassword).toHaveAttribute('type', 'text')
    expect(inputPassword).toHaveValue('Alice123')
  })

  it('should register a user', async () => {
    registerSpy.mockReturnValue(of({}))
    const inputName = getByRole('textbox', { name: 'name' })
    const inputEmail = getByRole('textbox', { name: 'email' })
    const inputPassword = getByRole('textbox', { name: 'password' })
    const checkboxTerm = getByRole('checkbox', { name: 'terms' })
    const button = getByRole('submit', { name: 'register' })

    await userEvent.type(inputName, 'Maria Alice Rodini')
    await userEvent.type(inputEmail, 'arodine@gmail.com')
    await userEvent.type(inputPassword, 'Alice123')
    await userEvent.click(checkboxTerm)
    await userEvent.click(button)

    expect(registerSpy).toHaveBeenCalledWith(
      'Maria Alice Rodini',
      'arodine@gmail.com',
      'Alice123'
    )
  })
})
