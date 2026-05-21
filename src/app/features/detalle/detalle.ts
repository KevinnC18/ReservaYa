import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RestaurantesData } from '../../data/restaurantes.interface';
import { RESTAURANTES } from '../../data/restaurantes.data';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './detalle.html',
  styles: ``,
})
export class Detalle implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private svc = inject(ReservationService);

  restaurante!: RestaurantesData;

  selectedFecha = '';
  selectedHora = '20:00';
  selectedPersonas = 2;

  reviews = [
    { name: 'Carlos M.', time: 'hace 2 días', comment: 'Excelente comida y servicio impecable.' },
    { name: 'Ana P.', time: 'hace 1 semana', comment: 'Muy buena relación calidad-precio.' },
    { name: 'Luis F.', time: 'hace 2 semanas', comment: 'El ambiente es increíble.' },
  ];

  times = ['12:00', '13:00', '14:00', '19:00', '19:30', '20:00', '20:30', '21:00'];
  guestsOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nombre = params.get('nombre');
      this.restaurante = RESTAURANTES.find(r => r.name === nombre) ?? RESTAURANTES[0];
    });
  }

  hacerReserva(): void {
    this.svc.restauranteId.set(this.restaurante.id);
    this.svc.fecha.set(this.selectedFecha);
    this.svc.hora.set(this.selectedHora);
    this.svc.personas.set(Number(this.selectedPersonas));
    this.router.navigate(['/reserva']);
  }
}
