import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RESTAURANTES } from '../../../../data/restaurantes.data';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLogin {
  private readonly router = inject(Router);

  readonly restaurante = RESTAURANTES.find((r) => r.id === 1) ?? RESTAURANTES[0];

  usuario = signal('La Terraza');
  password = signal('terraza123');
  mostrarPassword = signal(false);
  cargando = signal(false);
  errorMensaje = signal('');
  recordarme = signal(true);

  toggleMostrarPassword() {
    this.mostrarPassword.update((v) => !v);
  }

  rellenarCredenciales() {
    this.usuario.set('La Terraza');
    this.password.set('terraza123');
    this.errorMensaje.set('');
  }

  iniciarSesion() {
    const user = this.usuario().trim().toLowerCase();
    const pass = this.password().trim();

    this.errorMensaje.set('');

    if (!user || !pass) {
      this.errorMensaje.set('Por favor completa todos los campos.');
      return;
    }

    // Validación simulada para el prototipo
    const usuarioValido = user === 'la terraza' || user === 'laterraza';
    const passValido = pass === 'terraza123';

    if (!usuarioValido) {
      this.errorMensaje.set('Usuario inválido. Usa "La Terraza".');
      return;
    }

    if (!passValido) {
      this.errorMensaje.set('Contraseña incorrecta. Usa "terraza123".');
      return;
    }

    this.cargando.set(true);

    // Simulación breve de autenticación para feedback visual
    setTimeout(() => {
      this.cargando.set(false);
      this.router.navigate(['/admin']);
    }, 400);
  }
}

