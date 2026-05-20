import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RestaurantesData } from '../../data/restaurantes.interface';
import { RESTAURANTES } from '../../data/restaurantes.data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  imports: [CommonModule, RouterModule],
  templateUrl: './busqueda.html',
  styles: [
    ".search-card { min-height: var(--busqueda-card-height, 28rem); }",
  ],
})
export class Busqueda {

  restaurantes: RestaurantesData[] = RESTAURANTES;

  public statusLabel(name: string): string {
    return {
      'La Terraza': 'Disponible hoy',
      'Sushi Osaka': 'Últimas 2',
      'Casa del Mar': 'Disponible',
      'El Fogón Paisa': 'Disponible mañana',
    }[name] ?? 'Disponible';
  }

}
