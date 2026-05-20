import { Component } from '@angular/core';
import { RestaurantesData } from '../../data/restaurantes.interface';
import { RESTAURANTES } from '../../data/restaurantes.data';

@Component({
  selector: 'app-reserva',
  imports: [],
  templateUrl: './reserva.html',
  styles: ``,
})
export class Reserva {

  restaurantes: RestaurantesData[] = RESTAURANTES;

}
