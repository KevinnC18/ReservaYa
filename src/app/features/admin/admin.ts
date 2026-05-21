import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

export interface ReservaItem {
  cliente: string;
  telefono: string;
  hora: string;
  personas: number;
  mesa: string;
  estado: 'Confirmada' | 'Pendiente' | 'Cancelada';
}

export interface DiaSemana {
  dia: string;
  porcentaje: number;
}

@Component({
  selector: 'app-admin',
  imports: [CommonModule, RouterLink],
  templateUrl: './admin.html',
  styles: ``,
})
export class Admin {
  seccionActiva = signal('reservas');

  reservasHoy = 12;
  mesasDisponibles = 4;
  mesasTotales = 14;
  ocupacion = 71;
  nuevasReservas = 3;

  reservas: ReservaItem[] = [
    { cliente: 'Juan García', telefono: '+57 300 000 0001', hora: '20:00', personas: 2, mesa: 'Mesa 5', estado: 'Confirmada' },
    { cliente: 'María López', telefono: '+57 310 000 0002', hora: '19:30', personas: 4, mesa: 'Mesa 8', estado: 'Confirmada' },
    { cliente: 'Carlos Ruiz', telefono: '+57 320 000 0003', hora: '21:00', personas: 3, mesa: '—', estado: 'Pendiente' },
    { cliente: 'Ana Martínez', telefono: '+57 315 000 0004', hora: '20:30', personas: 6, mesa: 'Mesa 12', estado: 'Confirmada' },
    { cliente: 'Pedro Sosa', telefono: '+57 311 000 0005', hora: '13:00', personas: 2, mesa: 'Mesa 2', estado: 'Cancelada' },
    { cliente: 'Laura Torres', telefono: '+57 300 000 0006', hora: '21:30', personas: 5, mesa: 'Mesa 10', estado: 'Pendiente' },
  ];

  ocupacionSemanal: DiaSemana[] = [
    { dia: 'Lun', porcentaje: 55 },
    { dia: 'Mar', porcentaje: 76 },
    { dia: 'Mié', porcentaje: 48 },
    { dia: 'Jue', porcentaje: 82 },
    { dia: 'Vie', porcentaje: 95 },
    { dia: 'Sáb', porcentaje: 98 },
    { dia: 'Dom', porcentaje: 71 },
  ];

  setSeccion(seccion: string) {
    this.seccionActiva.set(seccion);
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Confirmada': return 'bg-green-100 text-green-700';
      case 'Pendiente': return 'bg-yellow-100 text-yellow-700';
      case 'Cancelada': return 'bg-red-100 text-red-700';
      default: return '';
    }
  }

  getBarHeight(porcentaje: number): string {
    return (porcentaje * 0.9) + 'px';
  }
}
