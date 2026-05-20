import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', loadComponent: () => import('./features/home/pages/home-pages/home-pages').then(m => m.HomePages) },
    { path: 'busqueda', loadComponent: () => import('./features/busqueda/busqueda').then(m => m.Busqueda) },
    { path: 'detalle', loadComponent: () => import('./features/detalle/detalle').then(m => m.Detalle) },
    { path: 'reserva', loadComponent: () => import('./features/reserva/reserva').then(m => m.Reserva) },
    { path: 'confirmacion', loadComponent: () => import('./features/confirmacion/confirmacion').then(m => m.Confirmacion) },
    { path: 'admin', loadComponent: () => import('./features/admin/admin').then(m => m.Admin) },
];
