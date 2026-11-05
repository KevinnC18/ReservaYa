import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reservas } from '../../components/reservas/reservas';
import { Estadisticas } from '../../components/estadisticas/estadisticas';
import { Resenas } from '../../components/resenas/resenas';
import { Perfil } from '../../components/perfil/perfil';
import { RESTAURANTES } from '../../../../data/restaurantes.data';

export type AdminSeccion = 'reservas' | 'estadisticas' | 'resenas' | 'perfil';

@Component({
  selector: 'app-admin-pages',
  imports: [RouterLink, Reservas, Estadisticas, Resenas, Perfil],
  templateUrl: './admin-pages.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPages {
  readonly restaurante = RESTAURANTES.find((r) => r.id === 1) ?? RESTAURANTES[0];
  seccionActiva = signal<AdminSeccion>('reservas');

  readonly menu = [
    { id: 'reservas' as const, label: 'Reservas' },
    { id: 'estadisticas' as const, label: 'Estadísticas' },
    { id: 'resenas' as const, label: 'Reseñas' },
    { id: 'perfil' as const, label: 'Perfil' },
  ];

  setSeccion(seccion: AdminSeccion) {
    this.seccionActiva.set(seccion);
  }
}
