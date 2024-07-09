import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetividadCotidianaComponent } from './efetividad-cotidiana.component';

describe('EfetividadCotidianaComponent', () => {
  let component: EfetividadCotidianaComponent;
  let fixture: ComponentFixture<EfetividadCotidianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EfetividadCotidianaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EfetividadCotidianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
