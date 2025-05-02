import { Routes } from '@angular/router';

export const PROVIDERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent), 
  },
  {
    path: 'detalle/:id', // Ruta para ver el detalle de un proveedor
    loadComponent: () => import('./detail/detail.component').then(m => m.DetailComponent),
  },
  {
    path: 'crear',
    loadComponent: () => import('./form/form.component').then(m => m.FormComponent), 
  },
];
