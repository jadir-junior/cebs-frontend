import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core'
import { Observable, Subscription, merge } from 'rxjs'
import { Overlay, OverlayRef } from '@angular/cdk/overlay'

import { IDropdownPanel } from './dropdown.model'
import { TemplatePortal } from '@angular/cdk/portal'

@Directive({
  selector: '[dropdownTriggerFor]',
})
export class DropdownTriggerForDirective implements OnDestroy {
  private isDropdownOpen = false
  private overlayRef!: OverlayRef
  private dropdownClosingActionsSub = Subscription.EMPTY

  @Input('dropdownTriggerFor') public dropdownPanel!: IDropdownPanel

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('click')
  toggleDropdown(): void {
    this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown()
  }

  openDropdown(): void {
    this.isDropdownOpen = true
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8,
          },
        ]),
    })

    const templatePortal = new TemplatePortal(
      this.dropdownPanel.templateRef,
      this.viewContainerRef
    )
    this.overlayRef.attach(templatePortal)

    this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(() =>
      this.destroyDropdown()
    )
  }

  private dropdownClosingActions(): Observable<MouseEvent | unknown> {
    const backdropClick$ = this.overlayRef.backdropClick()
    const detachment$ = this.overlayRef.detachments()
    // const dropdownClosed = this.dropdownPanel.closed

    return merge(
      backdropClick$,
      detachment$
      // dropdownClosed
    )
  }

  private destroyDropdown(): void {
    if (!this.overlayRef || !this.isDropdownOpen) {
      return
    }

    this.dropdownClosingActionsSub.unsubscribe()
    this.isDropdownOpen = false
    this.overlayRef.detach()
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose()
    }
  }
}
