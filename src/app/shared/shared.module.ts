import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambioLetrasPipe } from './pipes/cambio-letras.pipe';



@NgModule({
  declarations: [
    CambioLetrasPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CambioLetrasPipe
  ]
})
export class SharedModule { }
