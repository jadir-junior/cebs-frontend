import {
  Component,
  EventEmitter,
  Input,
  Output,
  Provider,
  forwardRef,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

const INPUT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => InputComponent),
}

@Component({
  selector: 'cebs-input',
  template: `
    <div class="wrapper-input" [ngClass]="{ 'disabled': disabled, 'error': 'error' }">
      <input
        [type]="type"
        [value]="value"
        [disabled]="disabled"
        [attr.placeholder]="placeholder"
        (keyup)="onInputChange($event)"
        (focus)="markAsTouched()"
      />
      <button
        *ngIf="appendIcon"
        class="material-symbols-outlined append-icon"
        type="button"
        [disabled]="disabled"
        (click)="onAppendIconClick()"
      >
        {{ appendIcon }}
      </button>
    </div>
  `,
  styleUrls: ['input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor {
  @Input() appendIcon!: string
  @Input() type: 'text' | 'email' | 'password' | 'tel' = 'text'
  @Input() placeholder!: string
  @Input() error = false

  @Output() appendIconClickEvent = new EventEmitter()

  disabled = false
  value: string | null = null

  onChange!: (value: string | null) => {}
  onTouched!: () => {}

  onInputChange(e: any): void {
    if (this.disabled) {
      return
    }

    this.value = e.target.value
    this.onChange(this.value)
  }

  onAppendIconClick(): void {
    this.appendIconClickEvent.emit()
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  writeValue(value: string | null): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  markAsTouched(): void {
    this.onTouched()
  }
}
