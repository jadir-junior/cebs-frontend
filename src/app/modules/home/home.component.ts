import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div class="wrapper-home" resize (isMobileEvent)="onScreenChange($event)">
      <cebs-navigation [isMobile]="isMobile"></cebs-navigation>
      <div class="wrapper-container">
        <div class="wrapper-header">
          <cebs-bars [isMobile]="isMobile"></cebs-bars>
        </div>
        <div class="wrapper-main">
          <div style=" width: 100%; height: 600px;">
            <form [formGroup]="form" (submit)="onSubmit(form)">
              <cebs-people-select formControlName="people"></cebs-people-select>
              <button type="submit" role="submit">submit</button>
            </form>
          </div>
          <div style="background-color: #eee; width: 100%; height: 800px;"></div>
          <div style="background-color: #eee; width: 100%; height: 700px;"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper-home {
        @media only screen and (max-width: 480px) {
          display: block;
        }

        display: flex;
        background-color: #eee;
      }

      .wrapper-container {
        @media only screen and (max-width: 480px) {
          margin-left: 0;
        }

        width: 100%;
      }

      .wrapper-main {
        margin: 16px;
      }

      .wrapper-header {
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `,
  ],
})
export class HomeComponent {
  isMobile = false

  form: FormGroup = this.fb.group({
    people: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder) {}

  onScreenChange(value: boolean): void {
    this.isMobile = value
  }

  onSubmit({ value }: FormGroup): void {
    console.log(value)
  }
}
