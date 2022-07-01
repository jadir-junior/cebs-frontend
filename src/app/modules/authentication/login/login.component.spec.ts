import { render, screen } from '@testing-library/angular'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { LoginComponent } from './login.component'
import { MockModule } from 'ng-mocks'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedComponentsModule } from '../../../shared-components.module'

describe('LoginComponent', () => {
  it('should create a login component', async () => {
    const { getByLabelText } = screen

    await render(LoginComponent, {
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MockModule(SharedComponentsModule),
      ],
    })

    expect(getByLabelText(/logo/i)).toBeInTheDocument()
    expect(getByLabelText(/title/i)).toHaveTextContent('Bem vinda(o)!')
    expect(getByLabelText(/description/i)).toHaveTextContent(
      'Eu estou tão feliz em te ver.'
    )
    expect(getByLabelText(/email/i)).toBeInTheDocument()
    expect(getByLabelText('password')).toBeInTheDocument()
    expect(getByLabelText(/forgot password/i)).toHaveTextContent('Esqueceu sua senha?')
    expect(getByLabelText(/login button/i)).toBeInTheDocument()
    expect(getByLabelText(/dont have an account/i)).toHaveTextContent(
      'Você não tem uma conta? Cadastre!'
    )
    expect(getByLabelText(/register/i)).toHaveTextContent('Cadastre!')
  })
})
