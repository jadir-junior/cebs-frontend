import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    return {
      users: [
        {
          id: 1,
          name: 'Jadir Junior',
          email: 'jadirjsjunior@gmail.com',
          token: 'fake-token',
        },
      ],
    }
  }
}
