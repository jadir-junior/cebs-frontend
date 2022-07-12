import { BehaviorSubject, Observable } from 'rxjs'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  isOpen = false

  closeNav(): void {
    this.isOpen = false
  }

  getShowNav(): Observable<boolean> {
    return this.showNav$.asObservable()
  }

  setShowNav(showHide: boolean): void {
    this.showNav$.next(showHide)
  }

  toggleNavState(): void {
    this.showNav$.next(!this.showNav$.value)
  }

  isNavOpen(): boolean {
    return this.showNav$.value
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
  }
}
