import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Info } from "../../components/info/info";
import { Restaurantes } from "../../components/restaurantes/restaurantes";

@Component({
  selector: 'app-home-pages',
  imports: [Hero, Info, Restaurantes],
  templateUrl: './home-pages.html',
  styles: ``,
})
export class HomePages {

}
