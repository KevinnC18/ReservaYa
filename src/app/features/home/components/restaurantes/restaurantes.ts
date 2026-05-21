import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESTAURANTES } from '../../../../data/restaurantes.data';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-restaurantes',
  imports: [CommonModule, RouterLink],
  templateUrl: './restaurantes.html',
  styles: ``,
})
export class Restaurantes {
  public popularRestaurantes = RESTAURANTES.filter((restaurantes) => restaurantes.popular);

  public statusLabel(name: string): string {
    return {
      'La Terraza': 'Disponible hoy',
      'Sushi Osaka': 'Últimas 2',
      'Casa del Mar': 'Disponible',
    }[name] ?? 'Disponible';
  }
}
