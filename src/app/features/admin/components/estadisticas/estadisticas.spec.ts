import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estadisticas } from './estadisticas';

describe('Estadisticas', () => {
  let component: Estadisticas;
  let fixture: ComponentFixture<Estadisticas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estadisticas],
    }).compileComponents();

    fixture = TestBed.createComponent(Estadisticas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener 7 días en la ocupación semanal', () => {
    expect(component.ocupacionSemanal.length).toBe(7);
  });

  it('getBarHeight debe calcular altura en px correctamente', () => {
    expect(component.getBarHeight(100)).toBe('90px');
    expect(component.getBarHeight(50)).toBe('45px');
  });

  it('todos los días deben tener porcentaje entre 0 y 100', () => {
    component.ocupacionSemanal.forEach((d) => {
      expect(d.porcentaje).toBeGreaterThanOrEqual(0);
      expect(d.porcentaje).toBeLessThanOrEqual(100);
    });
  });
});
