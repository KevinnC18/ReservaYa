import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Navbar {
  private router = inject(Router);

  goToHome() {
    this.router.navigate(['/inicio']);
  }

  isMobileMenuOpen = signal(false);
  toggleMenu() {
    this.isMobileMenuOpen.update(open => !open);
  }
}
