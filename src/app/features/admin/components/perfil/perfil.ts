import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RESTAURANTES } from '../../../../data/restaurantes.data';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  templateUrl: './perfil.html',
  styles: ``,
})
export class Perfil {
  guardado = signal(false);

  private readonly restauranteBase = RESTAURANTES.find((r) => r.id === 1) ?? RESTAURANTES[0];

  perfil = {
    nombre: this.restauranteBase.name,
    categoria: this.restauranteBase.category,
    descripcion: this.restauranteBase.description,
    direccion: this.restauranteBase.location,
    telefono: this.restauranteBase.phone,
    web: this.restauranteBase.page,
    horario: this.restauranteBase.schedule,
    capacidad: 14,
    precio: this.restauranteBase.value,
    imagen: this.restauranteBase.image,
  };

  guardar() {
    this.guardado.set(true);
    setTimeout(() => this.guardado.set(false), 2500);
  }
}
