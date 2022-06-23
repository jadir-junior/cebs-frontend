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
        id="checkbox"
        type="checkbox"
        [checked]="checked"
        (click)="onCheckChange($event)"
        [disabled]="disabled"
      />
      <span class="label-text" *ngIf="label">{{ label }}</span>
    </label>
  `,
  styleUrls: ['checkbox.component.scss'],
  providers: [CHECKBOX_VALUE_ACCESSOR],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label?: string

  disabled = false
  checked = false

  onChange!: (checked: boolean) => {}
  onTouched!: () => {}

  onCheckChange(e: any): void {
    if (this.disabled) {
      return
    }

    this.checked = e.target.checked
    this.onChange(this.checked)
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  writeValue(checked: boolean): void {
    this.checked = checked
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
