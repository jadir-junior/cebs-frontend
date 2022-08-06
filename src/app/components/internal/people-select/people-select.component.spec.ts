import { FormControl, NgControl } from '@angular/forms'
import { render, screen } from '@testing-library/angular'

import { BaseSelectModule } from 'src/app/common/base-select/base-select.module'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { PeopleSelectComponent } from './people-select.component'
import { PeopleSelectService } from './people-select.service'
import { of } from 'rxjs'
import userEvent from '@testing-library/user-event'

const RESPONSE_PEOPLE = [
  { 'label': 'Luke Skywalker', 'code': '1', 'description': 'Luke Skywalker' },
  { 'label': 'C-3PO', 'code': '2', 'description': 'C-3PO' },
  { 'label': 'R2-D2', 'code': '3', 'description': 'R2-D2' },
  { 'label': 'Darth Vader', 'code': '4', 'description': 'Darth Vader' },
  { 'label': 'Leia Organa', 'code': '5', 'description': 'Leia Organa' },
  { 'label': 'Owen Lars', 'code': '6', 'description': 'Owen Lars' },
  { 'label': 'Beru Whitesun lars', 'code': '7', 'description': 'Beru Whitesun lars' },
  { 'label': 'R5-D4', 'code': '8', 'description': 'R5-D4' },
  { 'label': 'Biggs Darklighter', 'code': '9', 'description': 'Biggs Darklighter' },
  { 'label': 'Obi-Wan Kenobi', 'code': '10', 'description': 'Obi-Wan Kenobi' },
]

const RESPONSE_TWO_PEOPLE = [
  { 'label': 'Anakin Skywalker', 'code': '11', 'description': 'Anakin Skywalker' },
  { 'label': 'Wilhuff Tarkin', 'code': '12', 'description': 'Wilhuff Tarkin' },
  { 'label': 'Chewbacca', 'code': '13', 'description': 'Chewbacca' },
  { 'label': 'Han Solo', 'code': '14', 'description': 'Han Solo' },
  { 'label': 'Greedo', 'code': '15', 'description': 'Greedo' },
  {
    'label': 'Jabba Desilijic Tiure',
    'code': '16',
    'description': 'Jabba Desilijic Tiure',
  },
  { 'label': 'Wedge Antilles', 'code': '18', 'description': 'Wedge Antilles' },
  { 'label': 'Jek Tono Porkins', 'code': '19', 'description': 'Jek Tono Porkins' },
  { 'label': 'Yoda', 'code': '20', 'description': 'Yoda' },
  { 'label': 'Palpatine', 'code': '21', 'description': 'Palpatine' },
]

describe('PeopleSelectComponent', () => {
  const getPeopleSuccesSpy = jest.fn().mockReturnValue(of(RESPONSE_PEOPLE))

  const setup = async (getPeople: jest.Mock) => {
    return render(PeopleSelectComponent, {
      componentProviders: [{ provide: NgControl, useValue: new FormControl() }],
      imports: [HttpClientTestingModule, BaseSelectModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: PeopleSelectService,
          useValue: {
            getPeople: getPeople,
          },
        },
      ],
    })
  }

  it('should create', async () => {
    const { container } = await setup(getPeopleSuccesSpy)
    expect(container).toBeInTheDocument()
  })

  it('should initialize with data', async () => {
    await setup(getPeopleSuccesSpy)

    const select = screen.getByRole('combobox')

    await userEvent.click(select)

    const options = screen.getAllByRole('option')

    expect(options.length).toBe(10)
  })

  it('should scroll in select and get more items', async () => {
    const expectedOne = RESPONSE_PEOPLE
    const expectedTwo = [...RESPONSE_PEOPLE, ...RESPONSE_TWO_PEOPLE]
    const getPeopleScrollSpy = jest
      .fn()
      .mockReturnValueOnce(of(RESPONSE_PEOPLE))
      .mockReturnValueOnce(of(RESPONSE_TWO_PEOPLE))
    const { fixture } = await setup(getPeopleScrollSpy)
    const component = fixture.componentInstance

    expect(getPeopleScrollSpy).toHaveBeenCalledWith(1)
    expect(component.items).toEqual(expectedOne)
    expect(component.scroll).toBe(false)

    component.onScrollToEnd()

    expect(getPeopleScrollSpy).toHaveBeenCalledWith(2)
    expect(component.scroll).toBe(true)
    expect(component.items).toEqual(expectedTwo)
  })
})
