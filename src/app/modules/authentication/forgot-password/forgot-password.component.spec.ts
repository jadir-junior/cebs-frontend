import { render, screen } from '@testing-library/angular'

import { AuthenticationService } from '../authentication.service'
import { ForgotPasswordComponent } from './forgot-password.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
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

describe('ForgotPasswordComponent', () => {
  const { getByLabelText, getByText, getByRole } = screen
  const forgotPasswordSpy = jest.fn()

  beforeEach(async () => {
    await render(ForgotPasswordComponent, {
      imports: [...modules],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            forgotPassword: forgotPasswordSpy,
          },
        },
      ],
    })
  })

  it('should create a forgot password page with children components', async () => {
    expect(getByLabelText('mascot-suspect')).toBeInTheDocument()
    expect(getByText(/esqueceu sua senha/i)).toBeInTheDocument()
    expect(
      getByText(/preencha seu e-mail abaixo e receba as instruções de resete de senha/i)
    ).toBeInTheDocument()
    expect(getByLabelText('email')).toBeInTheDocument()
    expect(getByLabelText('send')).toBeInTheDocument()
    expect(getByText(/volte para o login/i)).toBeInTheDocument()
  })

  it('when user clicks on button send without fill the email field must to show required error', async () => {
    const button = getByRole('button', { name: /send/i })
    await userEvent.click(button)

    expect(getByText(/o email é obrigatório/i)).toBeInTheDocument()
    expect(forgotPasswordSpy).not.toHaveBeenCalled()
  })

  it('should show the email error if a user enter with a email incorrectly', async () => {
    const input = getByRole('textbox', { name: 'email' })
    const button = getByRole('button', { name: /send/i })

    await userEvent.type(input, 'invalid-email')
    await userEvent.click(button)

    expect(getByText(/informe um e-mail valido/i)).toBeInTheDocument()
    expect(forgotPasswordSpy).not.toHaveBeenCalled()
  })

  it('should send email reset password', async () => {
    forgotPasswordSpy.mockReturnValue(of({}))
    const input = getByRole('textbox', { name: 'email' })
    const button = getByRole('button', { name: /send/i })

    await userEvent.type(input, 'arodini@gmail.com')
    await userEvent.click(button)

    expect(forgotPasswordSpy).toHaveBeenCalledWith('arodini@gmail.com')
  })
})
