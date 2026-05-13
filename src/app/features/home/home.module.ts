import { NgModule } from "@angular/core";
import { HomePages } from "./pages/home-pages/home-pages";
import { Hero } from "./components/hero/hero";
import { Info } from "./components/info/info";
import { Restaurantes } from "./components/restaurantes/restaurantes";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        HomePages,
        Hero,
        Info,
        Restaurantes
    ],
    exports: [
        HomePages
    ]

})
export class HomeModule { }