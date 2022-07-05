import { BehaviorSubject, Observable, tap } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'

interface IUser {
  id: string
  name: string
  email: string
  token: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private api = 'api/users/'
  private currentUserSubject: BehaviorSubject<IUser | null>
  public currentUser: Observable<IUser | null>

  // localStorage.getItem('currentUser')
  //   ? JSON.parse(localStorage.getItem('currentUser'))
  //   : null
  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser | null>(null)

    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): IUser | null {
    if (this.currentUserSubject.value) {
      return this.currentUserSubject.value
    }

    return null
  }

  login(email: string, password: string): void {
    this.http
      .post<IUser>(this.api, { email, password })
      .pipe(
        tap((user: IUser) => {
          this.authenticatedUser(user)
        })
      )
      .subscribe()
  }

  register(name: string, email: string, password: string): void {
    this.http
      .post<IUser>(this.api, { name, email, password })
      .pipe(
        tap((user: IUser) => {
          this.authenticatedUser(user)
        })
      )
      .subscribe()
  }

  forgotPassword(email: string): void {
    this.http
      .post<{ email: string }>(this.api, { email })
      .pipe(
        tap(() => {
          this.router.navigate(['/auth/check-your-email'])
        })
      )
      .subscribe()
  }

  getMe(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.API_URL}`)
  }

  logout(): void {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
    this.router.navigate(['/auth/login'])
  }

  private authenticatedUser(user: IUser): IUser {
    localStorage.setItem('currentUser', JSON.stringify(user))
    this.currentUserSubject.next(user)
    this.router.navigate(['/home'])
    return user
  }
}
