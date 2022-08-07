import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core'

import { IDropdownPanel } from './dropdown.model'

@Component({
  selector: 'cebs-dropdown',
  template: `
    <ng-template>
      <div (click)="closed.emit()" class="wrapper-dropdown">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  styles: [
    `
      :host {
        transition: all 200ms ease-in-out;
      }

      .wrapper-dropdown {
        background-color: white;
        min-width: 200px;
        min-height: 64px;
        box-shadow: 0px 0px 50px 0px rgb(82 63 105 / 15%);
        border-radius: 4px;
        padding: 12px 0;
      }
    `,
  ],
})
export class DropdownComponent implements IDropdownPanel {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<unknown>
  @Output() closed = new EventEmitter<void>()
}
