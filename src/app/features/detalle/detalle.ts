import { Component, OnInit, inject } from '@angular/core';
import { RestaurantesData } from '../../data/restaurantes.interface';
import { RESTAURANTES } from '../../data/restaurantes.data';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle.html',
  styles: ``,
})
export class Detalle implements OnInit {
  private route = inject(ActivatedRoute);

  restaurantes!: RestaurantesData;

  reviews = [
    {
      name: 'Carlos M.',
      time: 'hace 2 días',
      comment: 'Excelente comida y servicio impecable.'
    },
    {
      name: 'Ana P.',
      time: 'hace 1 semana',
      comment: 'Muy buena relación calidad-precio.'
    },
    {
      name: 'Luis F.',
      time: 'hace 2 semanas',
      comment: 'El ambiente es increíble.'
    }
  ];

  times = [
    '12:00',
    '13:00',
    '14:00',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00'
  ];

  guestsOptions = [
    '1 persona',
    '2 personas',
    '3 personas',
    '4 personas',
    '5 personas',
    '6 personas',
    '7 personas',
    '8 personas'
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = Number(params['id']);
      this.restaurantes = RESTAURANTES.find(r => r.id === id) || RESTAURANTES[0];
    });
  }

}
