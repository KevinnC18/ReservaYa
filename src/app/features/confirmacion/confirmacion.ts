import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantesData } from '../../data/restaurantes.interface';
import { RESTAURANTES } from '../../data/restaurantes.data';

@Component({
  selector: 'app-confirmacion',
  imports: [],
  templateUrl: './confirmacion.html',
  styles: ``,
})
export class Confirmacion {
  private router = inject(Router);

  readonly restaurante: RestaurantesData = RESTAURANTES[0];

  codigoReserva = 'RY-20250615-4821';
  nombre = 'Juan García';
  fecha = 'Lunes 15 jun · 20:00';
  personas = 2;

  volverAlInicio() {
    this.router.navigate(['/inicio']);
  }
}
