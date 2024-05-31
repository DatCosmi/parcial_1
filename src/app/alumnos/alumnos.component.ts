import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent {
  personas = [
    {
      nombre: 'Carlos Ivan García López',
      foto: 'https://drive.google.com/file/d/1FOGxajuK8szvzp5Qlf-yjMtxzm5KZHEH/view?usp=drive_link', // Cambiar a ruta absoluta
      cv: '../../assets/IvanGarcia_CV.pdf', // Cambiar a ruta absoluta
    },
    {
      nombre: 'Paola Herrera Ortiz',
      foto: 'https://drive.google.com/file/d/1Fb2T3Sxh3iqh7TXRtlw-QcNnKnOqqZcS/view?usp=drive_link', // Cambiar a ruta absoluta
      cv: '../../assets/Curriculum.pdf', // Cambiar a ruta absoluta
    },
    {
      nombre: 'José Samuel Reyna González',
      foto: '../../assets/persona3.jpg', // Cambiar a ruta absoluta
      cv: '../../assets/SamuelReyna_CV.pdf', // Cambiar a ruta absoluta
    },
  ];

  descargarCV(cv: string) {
    window.open(cv, '_blank');
  }
}
