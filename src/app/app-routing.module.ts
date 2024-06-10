import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DiagramaComponent } from './diagrama/diagrama.component';

const routes: Routes = [
  { path: '', redirectTo: '/conceptos', pathMatch: 'full' },
  { path: 'conceptos', component: ConceptosComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'diagrama', component: DiagramaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
