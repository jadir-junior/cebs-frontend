import {
  Component,
  EventEmitter,
  Input,
  Output,
  Provider,
  forwardRef,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

const SELECT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => SelectComponent),
}

@Component({
  selector: 'cebs-select',
  template: `
    <ng-select
      [items]="items"
      [bindValue]="bindValue"
      [bindLabel]="bindLabel"
      [multiple]="multiple"
      (change)="changeEvent.emit($event)"
      (focus)="onTouched($event)"
      (open)="openEvent.emit()"
    ></ng-select>
  `,
  styles: [],
  providers: [SELECT_VALUE_ACCESSOR],
})
export class SelectComponent<T> implements ControlValueAccessor {
  value!: T[] | string

  @Input() items!: T[]
  @Input() bindValue!: string
  @Input() bindLabel!: string
  @Input() multiple = false
  @Input() disabled = false
  @Input() formControlName!: string

  @Output() changeEvent = new EventEmitter<T>()
  @Output() touchedEvent = new EventEmitter()
  @Output() openEvent = new EventEmitter()

  onChange!: (value: string) => VoidFunction
  onTouched!: (value: string) => VoidFunction

  writeValue(value: string): void {
    if (this.disabled) {
      return
    }

    if (this.multiple && typeof value === 'string') {
      throw new Error(
        'O valor é multiplo, então no FormControl/FormBuilder o valor deve começar com um array! \n Exemplo pokemon: [[], [Validators.required]]'
      )
    }

    this.value = value
  }

  registerOnChange(fn: (value: string) => VoidFunction): void {
    this.onChange = fn
  }

  registerOnTouched(fn: (value: string) => VoidFunction): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
}
