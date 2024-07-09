import { Component } from '@angular/core';

@Component({
  selector: 'app-rio',
  templateUrl: './rio.component.html',
  styleUrl: './rio.component.css'
})
export class RioComponent {
  inversion: number = 0;
  beneficio: number = 0;
  roi: number | null = null;
  mensaje: string = '';

  calcularROI() {
    if (this.inversion <= 0 || this.beneficio <= 0) {
      this.mensaje = 'Error: Ingrese valores numéricos válidos.';
      this.roi = null;
      return;
    }
    this.roi = ((this.beneficio - this.inversion) / this.inversion) * 100;
    this.mensaje = this.roi >= 0
      ? `ROI: ${this.roi.toFixed(2)}%`
      : `ROI: -${(-this.roi).toFixed(2)}% (Pérdida)`;
  }
}
