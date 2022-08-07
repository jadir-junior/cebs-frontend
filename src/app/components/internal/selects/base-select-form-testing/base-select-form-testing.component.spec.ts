import { of, throwError } from 'rxjs'
import { render, screen } from '@testing-library/angular'

import { BaseSelectFormTestingComponent } from './base-select-form-testing.component'
import { BaseSelectModule } from 'src/app/common/base-select/base-select.module'
import { ERROR_404_NOT_FOUND } from 'src/app/common/response-errors/response-errors'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PeopleSelectModule } from '../people-select/people-select.module'
import { PeopleService } from '../people-select/people.service'
import { RESPONSE_PEOPLE } from '../people-select/people-select.component.spec'
import userEvent from '@testing-library/user-event'

describe('BaseSelectFormTestingComponent', () => {
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()
  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation()
  const getPeopleSuccesSpy = jest.fn().mockReturnValue(of(RESPONSE_PEOPLE))
  const getPeopleErrorSpy = jest
    .fn()
    .mockReturnValue(throwError(() => ERROR_404_NOT_FOUND))

  const setup = async (getPeople: jest.Mock) => {
    return render(BaseSelectFormTestingComponent, {
      imports: [BaseSelectModule, PeopleSelectModule, HttpClientTestingModule],
      providers: [
        {
          provide: PeopleService,
          useValue: {
            getPeople: getPeople,
          },
        },
      ],
    })
  }

  it('component must be created', async () => {
    await setup(getPeopleSuccesSpy)

    expect(screen.getByLabelText('People')).toBeInTheDocument()
    expect(screen.getByLabelText('People Disabled')).toBeInTheDocument()
  })

  it('should initialize with data', async () => {
    await setup(getPeopleSuccesSpy)

    const selects = screen.getAllByRole('combobox')

    await userEvent.click(selects[0])

    const options = screen.getAllByRole('option')

    expect(options.length).toBe(10)
  })

  it('should initialize with response error when get the people', async () => {
    await setup(getPeopleErrorSpy)

    expect(consoleErrorSpy).toHaveBeenCalledWith(ERROR_404_NOT_FOUND)
  })

  it('should select a first item in option "1"', async () => {
    await setup(getPeopleSuccesSpy)

    const selects = screen.getAllByRole('combobox')

    await userEvent.click(selects[0])

    const options = screen.getAllByRole('option')

    await userEvent.click(options[0])

    await userEvent.click(screen.getByRole('button', { name: 'submit' }))

    expect(consoleLogSpy).toHaveBeenCalledWith({ people: '1', peopleInitialValue: '3' })
  })

  it('should select a item in option and clear it', async () => {
    await setup(getPeopleSuccesSpy)

    const selects = screen.getAllByRole('combobox')

    await userEvent.click(selects[0])

    const options = screen.getAllByRole('option')

    await userEvent.click(options[0])

    await userEvent.click(screen.getAllByTitle(/clear all/i)[0])

    await userEvent.click(screen.getByRole('button', { name: 'submit' }))
    expect(consoleLogSpy).toHaveBeenCalledWith({ people: null, peopleInitialValue: '3' })
  })

  it('should be a select disabled when the form is set to disabled the input', async () => {
    await setup(getPeopleSuccesSpy)

    expect(screen.getByLabelText('People Disabled')).toHaveClass('ng-select-disabled')
  })

  it('should initial a select with initial value', async () => {
    await setup(getPeopleSuccesSpy)

    expect(screen.getByText('R2-D2')).toBeInTheDocument()
  })
})
