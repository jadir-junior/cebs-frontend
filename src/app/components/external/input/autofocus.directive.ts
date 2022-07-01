import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core'

@Directive({
  selector: '[autoFocus]',
})
export class AutofocusDirective implements AfterContentInit {
  @Input() autoFocus!: boolean

  constructor(private host: ElementRef) {}

  ngAfterContentInit(): void {
    if (this.autoFocus) {
      setTimeout(() => {
        this.host.nativeElement.focus()
      })
    }
  }
}
