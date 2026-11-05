import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RESTAURANTES } from '../../../../data/restaurantes.data';

export interface ResenaItem {
  nombre: string;
  fecha: string;
  rating: number;
  comentario: string;
  respuesta?: string;
}

@Component({
  selector: 'app-resenas',
  imports: [],
  templateUrl: './resenas.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resenas {
  readonly restaurante = RESTAURANTES.find((r) => r.id === 1) ?? RESTAURANTES[0];

  promedio = this.restaurante.rating;
  total = 124;
  filtro = signal(0);

  distribucion = [
    { estrellas: 5, cantidad: 104 },
    { estrellas: 4, cantidad: 14 },
    { estrellas: 3, cantidad: 4 },
    { estrellas: 2, cantidad: 1 },
    { estrellas: 1, cantidad: 1 },
  ];

  resenas: ResenaItem[] = [
    {
      nombre: 'Camila Restrepo',
      fecha: 'Hace 2 días',
      rating: 5,
      comentario: 'Excelente atención y la terraza es un encanto. Reservar por la app fue inmediato.',
      respuesta: '¡Gracias Camila! Te esperamos de nuevo.',
    },
    {
      nombre: 'Andrés Molina',
      fecha: 'Hace 4 días',
      rating: 4,
      comentario: 'Buena comida y ambiente, aunque el tiempo entre platos se alargó un poco.',
    },
    {
      nombre: 'Valentina Cruz',
      fecha: 'Hace 1 semana',
      rating: 5,
      comentario: 'Celebramos un cumpleaños y el equipo fue muy atento. Mesa lista a la hora.',
    },
    {
      nombre: 'Diego Herrera',
      fecha: 'Hace 1 semana',
      rating: 3,
      comentario: 'El menú está bien, pero la mesa asignada quedaba cerca de la cocina.',
    },
    {
      nombre: 'Sofía Álvarez',
      fecha: 'Hace 2 semanas',
      rating: 2,
      comentario: 'Tuvimos que esperar aunque la reserva estaba confirmada.',
    },
  ];

  get resenasFiltradas(): ResenaItem[] {
    const rating = this.filtro();
    if (rating === 0) return this.resenas;
    return this.resenas.filter((r) => r.rating === rating);
  }

  setFiltro(rating: number) {
    this.filtro.set(rating);
  }

  porcentaje(cantidad: number): string {
    return (cantidad / this.total) * 100 + '%';
  }

  estrellas(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
}
