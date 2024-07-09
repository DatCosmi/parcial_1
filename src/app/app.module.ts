import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { DiagramaComponent } from './diagrama/diagrama.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalcuComponent } from './calcu/calcu.component';
import { EfectividadCotidianaComponent } from './efetividad-cotidiana/efetividad-cotidiana.component';
import { EfetividadEmpresarialComponent } from './efetividad-empresarial/efetividad-empresarial.component';
import { EfectividadEficienciaEficaciaComponent } from './efectividad-eficiencia-eficacia/efectividad-eficiencia-eficacia.component';
import { RioComponent } from './rio/rio.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ConceptosComponent,
    DiagramaComponent,
    NavbarComponent,
    CalcuComponent,
    EfectividadCotidianaComponent,
    EfetividadEmpresarialComponent,
    EfectividadEficienciaEficaciaComponent,
    RioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule to the imports array
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }