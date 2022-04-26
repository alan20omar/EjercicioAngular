import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { CalculaFechaComponent } from './calcula-fecha/calcula-fecha.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SharedModule } from '../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ConversionesComponent,
    CalculaFechaComponent,
    FormularioComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatButtonModule,
  ]
})
export class UserModule { }
