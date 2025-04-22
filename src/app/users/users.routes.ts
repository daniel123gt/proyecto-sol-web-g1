import { Routes } from '@angular/router';

// Rutas para los subcomponentes de usuarios
export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent), // Listado de usuarios
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.component').then(m => m.FormComponent), // Formulario para crear o editar usuarios
  },
];
