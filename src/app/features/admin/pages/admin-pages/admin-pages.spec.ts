import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AdminPages } from './admin-pages';

describe('AdminPages', () => {
  let component: AdminPages;
  let fixture: ComponentFixture<AdminPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPages],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe iniciar en la sección "reservas"', () => {
    expect(component.seccionActiva()).toBe('reservas');
  });

  it('debe cambiar la sección activa correctamente', () => {
    component.setSeccion('estadisticas');
    expect(component.seccionActiva()).toBe('estadisticas');

    component.setSeccion('resenas');
    expect(component.seccionActiva()).toBe('resenas');

    component.setSeccion('perfil');
    expect(component.seccionActiva()).toBe('perfil');
  });

  it('debe tener las 4 secciones del menú', () => {
    expect(component.menu.map((item) => item.id)).toEqual([
      'reservas',
      'estadisticas',
      'resenas',
      'perfil',
    ]);
  });
});
