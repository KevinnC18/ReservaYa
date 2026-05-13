import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from "./features/home/home.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('ReservaYa');
}
