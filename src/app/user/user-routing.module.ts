import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaFechaComponent } from './calcula-fecha/calcula-fecha.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'form', component: FormularioComponent },
      { path: 'conversions', component: ConversionesComponent },
      { path: 'calculatedate', component: CalculaFechaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
