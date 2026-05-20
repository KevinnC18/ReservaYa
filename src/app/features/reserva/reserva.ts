import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantesData } from '../../data/restaurantes.interface';
import { RESTAURANTES } from '../../data/restaurantes.data';

@Component({
  selector: 'app-reserva',
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.html',
  styles: ``,
})
export class Reserva {
  private router = inject(Router);

  restaurantes: RestaurantesData[] = RESTAURANTES;
  restaurante = this.restaurantes[0];

  fecha = 'Lunes 15 de junio, 2025';
  hora = '20:00';
  personas = 2;

  form = {
    nombre: '',
    telefono: '',
    correo: '',
    notas: '',
    aceptaTerminos: false,
  };

  confirmarReserva() {
    if (this.form.aceptaTerminos) {
      this.router.navigate(['/confirmacion']);
    }
  }

  volverAlRestaurante() {
    this.router.navigate(['/detalle']);
  }
}
