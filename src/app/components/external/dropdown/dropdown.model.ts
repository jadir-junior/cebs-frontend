import { EventEmitter, TemplateRef } from '@angular/core'

export interface IDropdownPanel {
  templateRef: TemplateRef<unknown>
  readonly closed: EventEmitter<void>
}
