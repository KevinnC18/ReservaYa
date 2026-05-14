import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from "./features/home/home.module";
import { LayoutModule } from "./layout/layout.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule, LayoutModule],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('ReservaYa');
}
