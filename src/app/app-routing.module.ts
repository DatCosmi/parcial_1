import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DiagramaComponent } from './diagrama/diagrama.component';
import { CalcuComponent } from './calcu/calcu.component';
import { EfectividadCotidianaComponent } from './efetividad-cotidiana/efetividad-cotidiana.component';
import { EfetividadEmpresarialComponent } from './efetividad-empresarial/efetividad-empresarial.component';
import { EfectividadEficienciaEficaciaComponent } from './efectividad-eficiencia-eficacia/efectividad-eficiencia-eficacia.component';
import { RioComponent } from './rio/rio.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/conceptos', pathMatch: 'full'  },
  { path: 'conceptos', component: ConceptosComponent , canActivate: [AuthGuard]},
  { path: 'alumnos', component: AlumnosComponent, canActivate: [AuthGuard] },
  { path: 'diagrama', component: DiagramaComponent, canActivate: [AuthGuard] },
  { path: 'calculadoras', component: CalcuComponent , canActivate: [AuthGuard]},
  { path: 'efectividad_cotidiana', component: EfectividadCotidianaComponent, canActivate: [AuthGuard] },
  { path: 'efectividad_empresarial', component: EfetividadEmpresarialComponent, canActivate: [AuthGuard] },
  { path: 'efectivdad_eficiencia_eficacia', component: EfectividadEficienciaEficaciaComponent, canActivate: [AuthGuard] },
  { path: 'rio', component: RioComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
