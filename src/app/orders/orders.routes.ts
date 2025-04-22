import { Routes } from '@angular/router';

// Rutas para los subcomponentes de pedidos
export const ORDERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent), // Listado de pedidos
  },
  {
    path: 'detalle/:id', // Ruta para ver el detalle de un pedido
    loadComponent: () => import('./detail/detail.component').then(m => m.DetailComponent),
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.component').then(m => m.FormComponent), // Formulario para crear o editar pedidos
  },
];
