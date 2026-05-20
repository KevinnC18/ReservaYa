import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RestaurantesData } from '../../data/restaurantes.interface';
import { RESTAURANTES } from '../../data/restaurantes.data';

@Component({
  selector: 'app-confirmacion',
  imports: [CommonModule],
  templateUrl: './confirmacion.html',
  styles: ``,
})
export class Confirmacion {
  private router = inject(Router);

  restaurantes: RestaurantesData[] = RESTAURANTES;
  restaurante = this.restaurantes[0];

  codigoReserva = 'RY-20250615-4821';
  nombre = 'Juan García';
  fecha = 'Lunes 15 jun · 20:00';
  personas = 2;

  volverAlInicio() {
    this.router.navigate(['/inicio']);
  }
}
