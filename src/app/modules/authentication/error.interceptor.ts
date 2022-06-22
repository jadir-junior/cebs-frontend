import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs'

import { AuthenticationService } from './authentication.service'
import { Injectable } from '@angular/core'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authenticationService.logout()
          location.reload()
        }

        const error = err.error.message || err.statusText
        return throwError(() => error)
      })
    )
  }
}
