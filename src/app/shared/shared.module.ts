import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CambioLetrasPipe } from './pipes/cambio-letras.pipe';
import { InsertNameComponent } from './components/insert-name/insert-name.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LibrosLeidosChipComponent } from './components/libros-leidos-chip/libros-leidos-chip.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CambioLetrasPipe,
    InsertNameComponent,
    NavbarComponent,
    LibrosLeidosChipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    RouterModule.forChild([]),
  ],
  exports: [
    CambioLetrasPipe,
    InsertNameComponent,
    NavbarComponent,
    LibrosLeidosChipComponent
  ]
})
export class SharedModule { }
