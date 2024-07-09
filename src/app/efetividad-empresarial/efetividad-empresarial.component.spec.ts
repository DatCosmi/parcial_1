import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetividadEmpresarialComponent } from './efetividad-empresarial.component';

describe('EfetividadEmpresarialComponent', () => {
  let component: EfetividadEmpresarialComponent;
  let fixture: ComponentFixture<EfetividadEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EfetividadEmpresarialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EfetividadEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
