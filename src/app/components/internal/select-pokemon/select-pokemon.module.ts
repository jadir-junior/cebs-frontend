import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SelectPokemonComponent } from './select-pokemon.component'

@NgModule({
  declarations: [SelectPokemonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SelectPokemonComponent],
})
export class SelectPokemonModule {}
