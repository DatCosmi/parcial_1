import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.css']
})
export class CalcuComponent {

  constructor(private router: Router) { }

  navigateTo(calculator: string): void {
    this.router.navigate([`/calculator/${calculator}`]);
  }
}
