import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { vi } from 'vitest';

import { Reserva } from './reserva';

describe('Reserva', () => {
  let component: Reserva;
  let fixture: ComponentFixture<Reserva>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reserva],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Reserva);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar La Terraza como restaurante por defecto', () => {
    expect(component.restaurante.name).toBe('La Terraza');
  });

  it('debe inicializar el formulario vacío', () => {
    expect(component.form.nombre).toBe('');
    expect(component.form.telefono).toBe('');
    expect(component.form.correo).toBe('');
    expect(component.form.notas).toBe('');
    expect(component.form.aceptaTerminos).toBeFalsy();
  });

  it('NO debe navegar si los términos no están aceptados', () => {
    const spy = vi.spyOn(router, 'navigate');
    component.form.aceptaTerminos = false;
    component.confirmarReserva();
    expect(spy).not.toHaveBeenCalled();
  });

  it('debe navegar a /confirmacion al aceptar términos y confirmar', () => {
    const spy = vi.spyOn(router, 'navigate');
    component.form.aceptaTerminos = true;
    component.confirmarReserva();
    expect(spy).toHaveBeenCalledWith(['/confirmacion']);
  });

  it('debe navegar a /detalle al volver al restaurante', () => {
    const spy = vi.spyOn(router, 'navigate');
    component.volverAlRestaurante();
    expect(spy).toHaveBeenCalledWith(['/detalle']);
  });

  it('debe tener fecha, hora y personas definidos', () => {
    expect(component.fecha).toBeTruthy();
    expect(component.hora).toBeTruthy();
    expect(component.personas).toBeGreaterThan(0);
  });
});
