import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'proveedores',
        loadChildren: () => import('../providers/providers.routes').then(m => m.PROVIDERS_ROUTES),
      },
      {
        path: 'productos',
        loadChildren: () => import('../products/products.routes').then(m => m.PRODUCTS_ROUTES),
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../orders/orders.routes').then(m => m.ORDERS_ROUTES),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../users/users.routes').then(m => m.USERS_ROUTES),
      },
    ],
  },
];
