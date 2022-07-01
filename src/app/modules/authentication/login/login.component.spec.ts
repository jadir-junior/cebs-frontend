import { render, screen } from '@testing-library/angular'

import { AuthenticationService } from '../authentication.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { LoginComponent } from './login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedComponentsModule } from 'src/app/shared-components.module'
import { of } from 'rxjs'
import userEvent from '@testing-library/user-event'

const modules = [
  ReactiveFormsModule,
  RouterTestingModule,
  HttpClientTestingModule,
  SharedComponentsModule,
]

describe('LoginComponent', () => {
  const { getByLabelText, getByText } = screen
  const loginSpy = jest.fn()

  beforeEach(async () => {
    await render(LoginComponent, {
      imports: [...modules],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            login: loginSpy,
          },
        },
      ],
    })
  })

  it('should create a login component with children components', async () => {
    expect(getByLabelText(/logo/i)).toBeInTheDocument()
    expect(getByLabelText(/title/i)).toHaveTextContent('Bem vinda(o)!')
    expect(getByLabelText(/description/i)).toHaveTextContent(
      'Eu estou tão feliz em te ver.'
    )
    expect(getByLabelText(/email/i)).toBeInTheDocument()
    expect(getByLabelText('password')).toBeInTheDocument()
    expect(getByLabelText(/forgot password/i)).toHaveTextContent('Esqueceu sua senha?')
    expect(getByLabelText(/submit/i)).toBeInTheDocument()
    expect(getByLabelText(/dont have an account/i)).toHaveTextContent(
      'Você não tem uma conta? Cadastre!'
    )
    expect(getByLabelText(/register/i)).toHaveTextContent('Cadastre!')
  })

  it('when user clicks on button submit without fill the fields must to show required errors', async () => {
    const submit = screen.getByLabelText(/submit/i)
    await userEvent.click(submit)

    expect(getByText(/o email é obrigatório/i)).toBeInTheDocument()
    expect(getByText(/a senha é obrigatória/i)).toBeInTheDocument()
    expect(loginSpy).not.toHaveBeenCalled()
  })

  it('should show the email error if a user enter with a email incorrectly', async () => {
    const inputEmail = getByLabelText(/email/i)
    const button = getByLabelText(/submit/i)

    await userEvent.type(inputEmail, 'invalid-email')
    await userEvent.click(button)

    expect(getByText(/informe um e-mail valido/i)).toBeInTheDocument()
    expect(loginSpy).not.toHaveBeenCalled()
  })

  it('should show the password error if a user enter with a password incorrectly', async () => {
    const inputPassword = getByLabelText('password')
    const button = getByLabelText(/submit/i)

    await userEvent.type(inputPassword, 'invalid-password')
    await userEvent.click(button)

    expect(getByText(/password should have minimum 8/i)).toBeInTheDocument()
    expect(loginSpy).not.toHaveBeenCalled()
  })

  it('toggle visible and hide password when clicks on button within input', async () => {
    const inputPassword = getByLabelText('password')
    const iconButtonInput = getByLabelText('append-icon-button')

    await userEvent.type(inputPassword, 'Alice123')

    expect(inputPassword).toHaveAttribute('type', 'password')

    await userEvent.click(iconButtonInput)

    expect(inputPassword).toHaveAttribute('type', 'text')
    expect(inputPassword).toHaveValue('Alice123')
  })

  it('should do login', async () => {
    loginSpy.mockReturnValue(of({}))
    const inputEmail = getByLabelText(/email/i)
    const inputPassword = getByLabelText('password')
    const button = getByLabelText(/submit/i)

    await userEvent.type(inputEmail, 'arodine@gmail.com')
    await userEvent.type(inputPassword, 'Alice123')
    await userEvent.click(button)

    expect(loginSpy).toHaveBeenCalledWith('arodine@gmail.com', 'Alice123')
  })
})
