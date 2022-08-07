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
  onSelect(value: T | T[]): void
  onScrollToEnd(): void
}

@Directive()
export class BaseSelect<T>
  implements ControlValueAccessor, AfterContentInit, AfterViewInit
{
  @ViewChild('ngSelect', { static: true }) ngSelect!: NgSelectComponent

  @Input() bindLabel = 'label'
  @Input() bindValue = 'code'

  @Input() ariaLabel?: string
  @Input() hideSelected = true
  @Input() multiple = false

  items!: T[]
  loading = false
  scroll = false
  page = 1

  formControl!: NgControl

  value: string | string[] | null = null
  disabled = false
  onChange = (value: string | string[] | null) => {}
  onTouched = () => {}

  constructor(protected injector: Injector) {}

  ngAfterContentInit(): void {
    this.formControl = this.injector.get(NgControl)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setInitialValueInNgSelect()
    })
  }

  setInitialValueInNgSelect() {
    const value = this.formControl.control?.value
    if (value) {
      this.ngSelect.writeValue(value)
    }
  }

  writeValue(value: string | string[] | null): void {
    this.value = value
  }

  registerOnChange(fn: (value: string | string[] | null) => void): void {
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

  select(value: T | T[], cb: () => void): void {
    if (value === undefined) {
      this.value = null
    }

    if (typeof value === 'object') {
      this.value = (value as never)[this.bindValue]
    }

    if (Array.isArray(value) && this.multiple) {
      this.value = value.map((v) => (v as never)[this.bindValue])
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
