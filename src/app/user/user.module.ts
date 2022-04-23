import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { CalculaFechaComponent } from './calcula-fecha/calcula-fecha.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ConversionesComponent,
    CalculaFechaComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
