import { Component } from '@angular/core';

@Component({
  selector: 'app-efetividad-empresarial',
  templateUrl: './efetividad-empresarial.component.html',
  styleUrl: './efetividad-empresarial.component.css'
})
export class EfetividadEmpresarialComponent {
  unidadesProducidas: number = 0;
  tiempoPlaneado: number = 0;
  tiempoReal: number = 0;
  eficiencia: number | null = null;
  efectividad: number | null = null;

  calcularEficienciaEfectividad() {
    if (this.tiempoReal <= 0) {
      alert("El tiempo real no puede ser menor o igual a cero.");
      return;
    }
    this.eficiencia = (this.tiempoPlaneado / this.tiempoReal) * 100;
    this.efectividad = (this.unidadesProducidas / this.tiempoPlaneado) * 100;
  }
}
