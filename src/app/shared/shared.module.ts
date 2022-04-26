import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CambioLetrasPipe } from './pipes/cambio-letras.pipe';
import { InsertNameComponent } from './components/insert-name/insert-name.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CambioLetrasPipe,
    InsertNameComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    RouterModule.forChild([]),
  ],
  exports: [
    CambioLetrasPipe,
    InsertNameComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
