import { Component, signal, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HomeModule } from "./features/home/home.module";
import { LayoutModule } from "./layout/layout.module";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule, LayoutModule],
  templateUrl: './app.html',
  styles: [],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('350ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
})
export class App {
  protected readonly title = signal('ReservaYa');

  protected readonly loadingProgress = signal(0);
  protected readonly loadingVisible = signal(false);

  private readonly router = inject(Router);
  private progressInterval: any = null;

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.startProgressBar();
      } else if (event instanceof NavigationEnd) {
        this.completeProgressBar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        this.completeProgressBar();
      }
    });
  }

  // Barra de carga superior
  private startProgressBar() {
    if (this.progressInterval) clearInterval(this.progressInterval);
    this.loadingVisible.set(true);
    this.loadingProgress.set(15);

    this.progressInterval = setInterval(() => {
      this.loadingProgress.update(p => {
        if (p < 85) {
          const increment = Math.max(1, Math.floor((90 - p) / 6) + Math.floor(Math.random() * 3));
          return p + increment;
        }
        return p;
      });
    }, 120);
  }

  // Finalizar barra de carga
  private completeProgressBar() {
    if (this.progressInterval) clearInterval(this.progressInterval);
    this.loadingProgress.set(100);

    setTimeout(() => {
      this.loadingVisible.set(false);
      setTimeout(() => {
        this.loadingProgress.set(0);
      }, 150);
    }, 200);
  }

  // Obtener estado de la ruta
  getRouteState() {
    return this.router.url;
  }
}
