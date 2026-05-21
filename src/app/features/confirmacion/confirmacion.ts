import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { RESTAURANTES } from '../../data/restaurantes.data';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-confirmacion',
  imports: [],
  templateUrl: './confirmacion.html',
  styles: ``,
})
export class Confirmacion {
  private router = inject(Router);
  readonly svc = inject(ReservationService);

  readonly restaurante = computed(() =>
    RESTAURANTES.find(r => r.id === this.svc.restauranteId()) ?? RESTAURANTES[0]
  );

  volverAlInicio(): void {
    this.router.navigate(['/inicio']);
  }
}
