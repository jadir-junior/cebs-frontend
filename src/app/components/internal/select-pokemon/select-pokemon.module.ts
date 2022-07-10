import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SelectModule } from '../../external/select/select.module'
import { SelectPokemonComponent } from './select-pokemon.component'

@NgModule({
  declarations: [SelectPokemonComponent],
  imports: [CommonModule, SelectModule, ReactiveFormsModule],
  exports: [SelectPokemonComponent],
})
export class SelectPokemonModule {}
