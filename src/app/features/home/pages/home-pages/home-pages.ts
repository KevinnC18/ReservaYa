import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Info } from "../../components/info/info";
import { Restaurantes } from "../../components/restaurantes/restaurantes";
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home-pages',
  imports: [Hero, Info, Restaurantes, Footer],
  templateUrl: './home-pages.html',
  styles: ``,
})
export class HomePages {

}
