import { Routes } from '@angular/router';

// Rutas para los subcomponentes de productos
export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent), // Listado de productos
  },
  {
    path: 'detalle/:id', // Ruta para ver el detalle de un producto
    loadComponent: () => import('./detail/detail.component').then(m => m.DetailComponent),
  },
];
