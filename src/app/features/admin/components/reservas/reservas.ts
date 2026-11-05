import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RESTAURANTES } from '../../../../data/restaurantes.data';

export interface ReservaItem {
  cliente: string;
  telefono: string;
  hora: string;
  personas: number;
  mesa: string;
  estado: 'Confirmada' | 'Pendiente' | 'Cancelada';
}

@Component({
  selector: 'app-reservas',
  imports: [FormsModule, RouterLink],
  templateUrl: './reservas.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reservas {
  readonly restaurante = RESTAURANTES.find((r) => r.id === 1) ?? RESTAURANTES[0];

  reservasHoy = 12;
  mesasDisponibles = 4;
  mesasTotales = 14;
  ocupacion = 71;
  nuevasReservas = 3;
  filtroEstado = signal('Todas');

  reservas: ReservaItem[] = [
    { cliente: 'Juan García', telefono: '+57 300 000 0001', hora: '20:00', personas: 2, mesa: 'Mesa 5', estado: 'Confirmada' },
    { cliente: 'María López', telefono: '+57 310 000 0002', hora: '19:30', personas: 4, mesa: 'Mesa 8', estado: 'Confirmada' },
    { cliente: 'Carlos Ruiz', telefono: '+57 320 000 0003', hora: '21:00', personas: 3, mesa: '—', estado: 'Pendiente' },
    { cliente: 'Ana Martínez', telefono: '+57 315 000 0004', hora: '20:30', personas: 6, mesa: 'Mesa 12', estado: 'Confirmada' },
    { cliente: 'Pedro Sosa', telefono: '+57 311 000 0005', hora: '13:00', personas: 2, mesa: 'Mesa 2', estado: 'Cancelada' },
    { cliente: 'Laura Torres', telefono: '+57 300 000 0006', hora: '21:30', personas: 5, mesa: 'Mesa 10', estado: 'Pendiente' },
  ];

  get reservasFiltradas(): ReservaItem[] {
    const filtro = this.filtroEstado();
    if (filtro === 'Todas') return this.reservas;
    return this.reservas.filter((r) => r.estado === filtro);
  }

  setFiltro(estado: string) {
    this.filtroEstado.set(estado);
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Confirmada':
        return 'bg-success/15 text-success';
      case 'Pendiente':
        return 'bg-primary/10 text-primary';
      case 'Cancelada':
        return 'bg-error/15 text-error';
      default:
        return '';
    }
  }
}
