import { Component, Injector, OnInit, Provider, forwardRef } from '@angular/core'

import { BaseSelect, IBaseSelect } from 'src/app/common/base-select/base-select.component'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { PeopleSelectService } from './people-select.service'

export interface IPeopleSelect {
  label: string
  code: string
  description: string
}

const PEOPLE_SELECT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => PeopleSelectComponent),
}

@Component({
  selector: 'cebs-people-select',
  templateUrl: '../../../common/base-select/base-select.component.html',
  providers: [PEOPLE_SELECT_VALUE_ACCESSOR],
})
export class PeopleSelectComponent
  extends BaseSelect<IPeopleSelect>
  implements IBaseSelect<IPeopleSelect>, OnInit
{
  constructor(
    private peopleService: PeopleSelectService,
    protected override injector: Injector
  ) {
    super(injector)
  }

  ngOnInit(): void {
    this.getPeople()
  }

  getPeople() {
    this.getItems(() => {
      this.peopleService.getPeople(this.page).subscribe({
        next: (response) => this.responseSuccess(response),
        error: (error) => this.responseError(error),
      })
    })
  }

  onSelect(value: IPeopleSelect): void {
    this.select(value, () => {
      this.getPeople()
    })
  }

  onScrollToEnd(): void {
    this.scrollToEnd(() => {
      this.getPeople()
    })
  }
}
