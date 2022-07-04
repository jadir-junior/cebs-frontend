import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core'

export interface IWindowSize {
  width: number
  height: number
}

@Directive({
  selector: '[resize]',
})
export class WindowResizeDirective implements OnInit {
  @Output() windowResizeEvent = new EventEmitter<IWindowSize>()
  @Output() isMobileEvent = new EventEmitter<boolean>()

  @Input() MOBILE_WIDTH = 480

  private screenWidth!: number
  private screenHeight!: number

  constructor() {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
  }

  ngOnInit(): void {
    this.isMobile()
  }

  setWindowValues(): void {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.setWindowValues()
    this.windowResizeEvent.emit({
      width: this.screenWidth,
      height: this.screenHeight,
    })
  }

  @HostListener('window:resize', ['$event'])
  isMobile(): void {
    this.setWindowValues()
    if (this.screenWidth < this.MOBILE_WIDTH) {
      this.isMobileEvent.emit(true)
      return
    }

    this.isMobileEvent.emit(false)
  }
}
