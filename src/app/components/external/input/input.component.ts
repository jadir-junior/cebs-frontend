import { Component, Input, Provider, forwardRef } from '@angular/core'
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
    </div>
  `,
  styles: [
    `
      .wrapper-input {
        background-color: var(--background-input);
        border: 1px solid var(--background-input);
        padding: 14px 16px;
        border-radius: 12px;

        &:focus-within {
          border: 1px solid var(--primary-color);
        }

        input {
          width: 100%;
          font-size: 16px;
          background-color: transparent;
          border: none;
          outline: 0;
        }
      }
    `,
  ],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'email' | 'password' | 'tel' = 'text'
  @Input() placeholder!: string
  @Input() error = false

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
