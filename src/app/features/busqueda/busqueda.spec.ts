import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Busqueda } from './busqueda';

describe('Busqueda', () => {
  let component: Busqueda;
  let fixture: ComponentFixture<Busqueda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Busqueda],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Busqueda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

