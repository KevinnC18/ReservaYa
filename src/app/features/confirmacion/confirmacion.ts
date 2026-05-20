import { Component } from '@angular/core';
import { RestaurantesData } from '../../data/restaurantes.interface';
import { RESTAURANTES } from '../../data/restaurantes.data';

@Component({
  selector: 'app-confirmacion',
  imports: [],
  templateUrl: './confirmacion.html',
  styles: ``,
})
export class Confirmacion {

  restaurantes: RestaurantesData[] = RESTAURANTES;

}
