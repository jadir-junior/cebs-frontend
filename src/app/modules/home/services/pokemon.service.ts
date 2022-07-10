import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

export interface IPokemon {
  name: string
  url: string
}

export interface IResponsePokemon {
  count: number
  next: string | null
  previous: string | null
  results: IPokemon[]
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  URL = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) {}

  getPokemons(page: number): Observable<IResponsePokemon> {
    return this.http.get<IResponsePokemon>(this.URL, {
      params: {
        offset: 20 * page,
      },
    })
  }
}
