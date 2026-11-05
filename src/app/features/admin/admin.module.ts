import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPages } from './pages/admin-pages/admin-pages';
import { Reservas } from './components/reservas/reservas';
import { Estadisticas } from './components/estadisticas/estadisticas';
import { Resenas } from './components/resenas/resenas';
import { Perfil } from './components/perfil/perfil';

@NgModule({
  imports: [CommonModule, AdminPages, Reservas, Estadisticas, Resenas, Perfil],
  exports: [AdminPages],
})
export class AdminModule {}
