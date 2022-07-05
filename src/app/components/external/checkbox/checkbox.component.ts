import { Component, Input, Provider, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

const CHECKBOX_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => CheckboxComponent),
}

@Component({
  selector: 'cebs-checkbox',
  template: `
    <label for="checkbox" class="label" [ngClass]="{ 'label-disabled': disabled }">
      <input
        #input
        id="checkbox"
        type="checkbox"
        role="checkbox"
        [attr.aria-label]="ariaLabel"
        [attr.aria-checked]="checked"
        [checked]="checked"
        [disabled]="disabled"
        (click)="onCheckChange(input.checked)"
      />
      <span class="label-text" *ngIf="label">{{ label }}</span>
    </label>
  `,
  styleUrls: ['checkbox.component.scss'],
  providers: [CHECKBOX_VALUE_ACCESSOR],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label?: string
  @Input() ariaLabel!: string

  disabled = false
  checked = false

  onChange!: (checked: boolean) => VoidFunction
  onTouched!: () => VoidFunction

  onCheckChange(checked: boolean): void {
    if (this.disabled) {
      return
    }

    this.checked = checked
    this.onChange(this.checked)
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  writeValue(checked: boolean): void {
    this.checked = checked
  }

  registerOnChange(fn: (value: boolean) => VoidFunction): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => VoidFunction): void {
    this.onTouched = fn
  }

  markAsTouched(): void {
    this.onTouched()
  }
}
