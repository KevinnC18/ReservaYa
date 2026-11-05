import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Navbar {
  private router = inject(Router);

  readonly isAdminActive = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects.startsWith('/admin'))
    ),
    { initialValue: this.router.url.startsWith('/admin') }
  );

  goToHome() {
    this.router.navigate(['/inicio']);
  }

  isMobileMenuOpen = signal(false);

  toggleMenu() {
    this.isMobileMenuOpen.update(open => !open);
  }

  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
