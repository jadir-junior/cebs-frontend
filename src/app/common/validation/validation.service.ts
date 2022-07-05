import { AbstractControl, ValidatorFn } from '@angular/forms'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  passwordPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null
      }

      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
      const valid = regex.test(control.value)
      return valid ? null : { invalidPassword: true }
    }
  }
}
