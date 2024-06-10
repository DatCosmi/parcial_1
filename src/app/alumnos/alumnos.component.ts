import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  personas = [
    {
      nombre: 'Carlos Ivan Garcia Lopez',
      foto: 'https://herrerateam.projectsutd.online/ivanfoto.png',  // Cambiar a ruta absoluta
      cv: 'https://drive.google.com/file/d/1FOGxajuK8szvzp5Qlf-yjMtxzm5KZHEH/view?usp=drive_link'  // Cambiar a ruta absoluta
    },
    {
      nombre: 'Paola Herrera Ortiz',
      foto: 'https://herrerateam.projectsutd.online/paola-modified.png',  // Cambiar a ruta absoluta
      cv: 'https://drive.google.com/file/d/1iF27vipamHUQmdj2NN0xa4cugmFYeCo-/view?usp=drive_link'  // Cambiar a ruta absoluta
    },
    {
      nombre: 'Jose Samuel Reyna Gonzalez',
      foto: 'https://herrerateam.projectsutd.online/yo.png',  // Cambiar a ruta absoluta
      cv: 'https://drive.google.com/file/d/1eNNSfQsIoLDazsN6NeCoXE462IKAqQO1/view?usp=drive_link'  // Cambiar a ruta absoluta
    }
  ];

  descargarCV(cv: string) {
    window.open(cv, '_blank');
  }
  abrirTableroJira() {
    window.open('https://proyectoparcial1.atlassian.net/jira/software/projects/P1/boards/1?atlOrigin=eyJpIjoiNDY3MjZjZjlhNzgxNGQzZTliMGYyODgyN2Q3OTg2MDEiLCJwIjoiaiJ9', '_blank');
  }
}
