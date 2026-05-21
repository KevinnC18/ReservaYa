import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  restauranteId = signal<number>(1);
  fecha = signal<string>('');
  hora = signal<string>('20:00');
  personas = signal<number>(2);
  nombre = signal<string>('');
  telefono = signal<string>('');
  correo = signal<string>('');
  notas = signal<string>('');
  codigoReserva = signal<string>('');

  fechaFormateada = computed(() => {
    if (!this.fecha()) return '';
    const [y, m, d] = this.fecha().split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('es-CO', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
  });

  fechaCorta = computed(() => {
    if (!this.fecha()) return '';
    const [y, m, d] = this.fecha().split('-').map(Number);
    const dateStr = new Date(y, m - 1, d).toLocaleDateString('es-CO', {
      weekday: 'short', day: 'numeric', month: 'short',
    });
    return `${dateStr} · ${this.hora()}`;
  });

  generarCodigo(): void {
    const hoy = new Date();
    const yyyymmdd = hoy.toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.floor(1000 + Math.random() * 9000);
    this.codigoReserva.set(`RY-${yyyymmdd}-${rand}`);
  }
}
