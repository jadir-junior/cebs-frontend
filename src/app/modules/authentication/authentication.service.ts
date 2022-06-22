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

  login(email: string, password: string): Observable<IUser> {
    const user: IUser = {
      id: '1',
      name: 'Mick',
      email: email,
      token: '1234asdfg',
    }

    return of(user).pipe(
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
        this.router.navigate(['/home'])
        return user
      })
    )
  }

  getMe(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.API_URL}`)
  }

  logout(): void {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }
}
