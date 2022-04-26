import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { CalculaFechaComponent } from './calcula-fecha/calcula-fecha.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UserComponent } from './user.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule
  ]
})
export class UserModule { }
