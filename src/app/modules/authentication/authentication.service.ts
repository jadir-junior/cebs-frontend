import { BehaviorSubject, Observable, of, tap } from 'rxjs'

import { Injectable } from '@angular/core'

interface IUser {
  id: string
  name: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<IUser | null>
  public currentUser: Observable<IUser | null>

  constructor() {
    this.currentUserSubject = new BehaviorSubject<IUser | null>(
      JSON.parse(localStorage.getItem('currentUser')!)
    )
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): IUser | null {
    if (this.currentUserSubject.value) {
      return this.currentUserSubject.value
    }

    return null
  }

  login(username: string, password: string) {
    return of().pipe(
      tap(() => {
        const user: IUser = {
          id: '1',
          name: 'Mick',
        }
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
        return user
      })
    )
  }

  logout(): void {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }
}
