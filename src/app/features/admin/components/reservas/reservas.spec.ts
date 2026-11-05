import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Reservas } from './reservas';

describe('Reservas', () => {
  let component: Reservas;
  let fixture: ComponentFixture<Reservas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reservas],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Reservas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener 6 reservas en la lista', () => {
    expect(component.reservas.length).toBe(6);
  });

  it('getEstadoClass debe retornar clase de éxito para Confirmada', () => {
    expect(component.getEstadoClass('Confirmada')).toContain('success');
  });

  it('getEstadoClass debe retornar clase primary para Pendiente', () => {
    expect(component.getEstadoClass('Pendiente')).toContain('primary');
  });

  it('getEstadoClass debe retornar clase de error para Cancelada', () => {
    expect(component.getEstadoClass('Cancelada')).toContain('error');
  });

  it('debe filtrar reservas por estado', () => {
    component.setFiltro('Pendiente');
    expect(component.reservasFiltradas.every((r) => r.estado === 'Pendiente')).toBeTrue();
  });

  it('todas las reservas deben tener estado válido', () => {
    const estadosValidos = ['Confirmada', 'Pendiente', 'Cancelada'];
    component.reservas.forEach((r) => {
      expect(estadosValidos).toContain(r.estado);
    });
  });
});
