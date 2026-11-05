import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RESTAURANTES } from '../../../../data/restaurantes.data';

export interface DiaSemana {
  dia: string;
  porcentaje: number;
}

export interface FranjaHoraria {
  hora: string;
  reservas: number;
}

@Component({
  selector: 'app-estadisticas',
  imports: [DecimalPipe],
  templateUrl: './estadisticas.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Estadisticas {
  readonly restaurante = RESTAURANTES.find((r) => r.id === 1) ?? RESTAURANTES[0];

  reservasMes = 186;
  ticketPromedio = 128000;
  calificacion = this.restaurante.rating;
  noShows = 8;
  ocupacionPromedio = 75;

  ocupacionSemanal: DiaSemana[] = [
    { dia: 'Lun', porcentaje: 55 },
    { dia: 'Mar', porcentaje: 76 },
    { dia: 'Mié', porcentaje: 48 },
    { dia: 'Jue', porcentaje: 82 },
    { dia: 'Vie', porcentaje: 95 },
    { dia: 'Sáb', porcentaje: 98 },
    { dia: 'Dom', porcentaje: 71 },
  ];

  franjas: FranjaHoraria[] = [
    { hora: '12:00', reservas: 8 },
    { hora: '13:00', reservas: 14 },
    { hora: '14:00', reservas: 11 },
    { hora: '19:00', reservas: 16 },
    { hora: '20:00', reservas: 22 },
    { hora: '21:00', reservas: 18 },
    { hora: '22:00', reservas: 9 },
  ];

  get maxFranja(): number {
    return Math.max(...this.franjas.map((f) => f.reservas));
  }

  getBarHeight(porcentaje: number): string {
    return porcentaje * 0.9 + 'px';
  }

  getFranjaWidth(reservas: number): string {
    return (reservas / this.maxFranja) * 100 + '%';
  }
}
