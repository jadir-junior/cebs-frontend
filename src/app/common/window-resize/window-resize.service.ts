import { HostListener, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class WindowResizeService {
  public getScreenWidth: any
  public getScreenHeight: any

  constructor() {
    this.getScreenWidth = window.innerWidth
    this.getScreenHeight = window.innerHeight
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth
    this.getScreenHeight = window.innerHeight
    console.log('WIDTH + HEIGHT: ', this.getScreenWidth, this.getScreenHeight)
  }
}
