import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectividadEficienciaEficaciaComponent } from './efectividad-eficiencia-eficacia.component';

describe('EfectividadEficienciaEficaciaComponent', () => {
  let component: EfectividadEficienciaEficaciaComponent;
  let fixture: ComponentFixture<EfectividadEficienciaEficaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EfectividadEficienciaEficaciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EfectividadEficienciaEficaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
