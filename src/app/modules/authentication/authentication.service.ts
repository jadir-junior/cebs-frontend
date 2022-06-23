import { BehaviorSubject, Observable, of, tap } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'

interface IUser {
  id: string
  name: string
  email: string
  token: string
}

const response: IUser = {
  id: '1',
  name: 'Mick',
  email: 'mickjjunior@gmail.com',
  token: '1234asdfg',
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<IUser | null>
  public currentUser: Observable<IUser | null>

  constructor(private router: Router, private http: HttpClient) {
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

  login(email: string, password: string): Observable<unknown> {
    return of({}).pipe(
      tap(() => {
        this.authenticatedUser()
      })
    )
  }

  register(name: string, email: string, password: string): Observable<unknown> {
    return of({}).pipe(
      tap(() => {
        this.authenticatedUser()
      })
    )
  }

  forgotPassword(email: string): Observable<unknown> {
    console.log('EMAIL: ', email)
    return of({}).pipe(
      tap(() => {
        this.router.navigate(['/check-your-email'])
      })
    )
  }

  getMe(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.API_URL}`)
  }

  logout(): void {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
    this.router.navigate(['/auth/login'])
  }

  private authenticatedUser(): IUser {
    localStorage.setItem('currentUser', JSON.stringify(response))
    this.currentUserSubject.next(response)
    this.router.navigate(['/home'])
    return response
  }
}
