import { Observable, map } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { IPeopleSelect } from './people-select.component'
import { Injectable } from '@angular/core'

interface IResponsePagination<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

interface IPeople {
  'name': string
  'height': string
  'mass': string
  'hair_color': string
  'skin_color': string
  'eye_color': string
  'birth_year': string
  'gender': string
  'homeworld': string
  'films': string[]
  'species': string[]
  'vehicles': string[]
  'starships': string[]
  'created': string
  'edited': string
  'url': string
}

export interface IPeopleService {
  getPeople(page: number): Observable<IPeopleSelect[]>
}

@Injectable({
  providedIn: 'root',
})
export class PeopleSelectService implements IPeopleService {
  STAR_WARS_API = 'https://swapi.dev/api'

  constructor(private http: HttpClient) {}

  getPeople(page: number): Observable<IPeopleSelect[]> {
    return this.http
      .get<IResponsePagination<IPeople>>(`${this.STAR_WARS_API}/people?page=${page}`)
      .pipe(
        map((response) => {
          return response.results.map((person) => ({
            label: person.name,
            code: this.getIdFromUrl(person.url),
            description: person.name,
          }))
        })
      )
  }

  private getIdFromUrl(url: string): string {
    const id = url.match(/\d+/)
    return Array.isArray(id) ? id[0] : ''
  }
}
