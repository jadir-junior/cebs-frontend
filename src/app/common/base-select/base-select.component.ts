/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  Injector,
  Input,
  ViewChild,
} from '@angular/core'
import { ControlValueAccessor, NgControl } from '@angular/forms'

import { NgSelectComponent } from '@ng-select/ng-select'

export interface IBaseSelect<T> {
  onSelect(value: T): void
  onScrollToEnd(): void
}

@Directive()
export class BaseSelect<T>
  implements ControlValueAccessor, AfterContentInit, AfterViewInit
{
  @ViewChild('ngSelect', { static: true }) ngSelect!: NgSelectComponent

  @Input() bindLabel = 'label'
  @Input() bindValue = 'code'

  items!: T[]
  loading = false
  scroll = false
  page = 1

  formControl!: NgControl

  value: string | null = null
  disabled = false
  onChange = (value: string | null) => {}
  onTouched = () => {}

  constructor(protected injector: Injector) {}

  ngAfterContentInit(): void {
    this.formControl = this.injector.get(NgControl)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setWriteValueInNgSelect()
    })
  }

  setWriteValueInNgSelect() {
    const value = this.formControl.control?.value
    value ? this.ngSelect.writeValue(value) : this.ngSelect.writeValue('')
  }

  writeValue(value: string | null): void {
    this.value = value
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  getItems(cb: () => void): void {
    this.loading = true

    cb()
  }

  responseSuccess(response: T[]): void {
    if (this.scroll) {
      this.items = [...this.items, ...response]
    } else {
      this.items = response
    }

    this.loading = false
  }

  responseError(error: Error): void {
    this.loading = false
    console.error(error)
  }

  select(value: T, cb: () => void): void {
    if (value === undefined) {
      this.value = null
    }

    if (typeof value === 'object') {
      this.value = (value as never)[this.bindValue]
    }

    this.onChange(this.value)

    cb()
  }

  scrollToEnd(cb: () => void) {
    this.page++
    this.scroll = true
    cb()
  }
}
