import { Component, Input, Provider, forwardRef } from '@angular/core'
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms'
import {
  IPokemon,
  IResponsePokemon,
  PokemonService,
} from 'src/app/modules/home/services/pokemon.service'

import { Subscription } from 'rxjs'

const SELECT_POKEMON_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => SelectPokemonComponent),
}

@Component({
  selector: 'cebs-select-pokemon',
  template: `
    <form [formGroup]="form">
      <cebs-select
        [items]="pokemons"
        [bindValue]="bindValue"
        [bindLabel]="bindLabel"
        (openEvent)="getPokemons()"
        formControlName="pokemon"
      ></cebs-select>
    </form>
  `,
  styles: [],
  providers: [SELECT_POKEMON_VALUE_ACCESSOR],
})
export class SelectPokemonComponent implements ControlValueAccessor {
  page = 0
  value!: IPokemon[] | string
  pokemons!: IPokemon[]
  form: FormGroup = this.fb.group({
    pokemon: ['', [Validators.required]],
  })

  @Input() bindValue = 'url'
  // IF you can the all object put [bindValue]="null" in the parent
  @Input() bindLabel = 'name'
  @Input() multiple = false
  @Input() disabled = false
  @Input() formControlName!: string

  onTouched!: () => VoidFunction
  onChange!: () => void

  onChangeSubs!: Subscription[]

  constructor(private pokemonService: PokemonService, private fb: FormBuilder) {}

  writeValue(value: string | IPokemon[]): void {
    if (this.disabled) {
      return
    }

    this.value = value
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => VoidFunction): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  getPokemons(): void {
    this.pokemonService.getPokemons(this.page).subscribe((response: IResponsePokemon) => {
      this.pokemons = response.results
      console.log('[GET POKEMONS]: ', this.pokemons)
    })
  }
}
