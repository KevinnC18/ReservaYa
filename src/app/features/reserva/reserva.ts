import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RESTAURANTES } from '../../data/restaurantes.data';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reserva',
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.html',
  styles: ``,
})
export class Reserva {
  private router = inject(Router);
  readonly svc = inject(ReservationService);

  readonly restaurante = computed(() =>
    RESTAURANTES.find(r => r.id === this.svc.restauranteId()) ?? RESTAURANTES[0]
  );

  nombre = '';
  telefono = '';
  correo = '';
  notas = '';
  aceptaTerminos = false;

  get formValido(): boolean {
    return !!(this.aceptaTerminos && this.nombre.trim() && this.telefono.trim() && this.correo.trim());
  }

  confirmarReserva(): void {
    if (!this.formValido) return;
    this.svc.nombre.set(this.nombre);
    this.svc.telefono.set(this.telefono);
    this.svc.correo.set(this.correo);
    this.svc.notas.set(this.notas);
    this.svc.generarCodigo();
    this.router.navigate(['/confirmacion']);
  }

  volverAlRestaurante(): void {
    this.router.navigate(['/detalle'], { queryParams: { id: this.svc.restauranteId() } });
  }
}
