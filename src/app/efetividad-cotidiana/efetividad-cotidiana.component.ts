import { Component } from '@angular/core';

@Component({
  selector: 'app-efectividad-cotidiana',
  templateUrl: './efetividad-cotidiana.component.html',
  styleUrls: ['./efetividad-cotidiana.component.css']
})
export class EfectividadCotidianaComponent {
  realizados!: number;
  total!: number;
  efectividad: number | null = null;

  calcularEfectividad() {
    if (this.realizados > this.total) {
      alert('El número de logros alcanzados no puede ser mayor que el número total de objetivos.');
      return;
    }

this.efectividad = Number((this.realizados / this.total * 100).toFixed(2));
  }
}
