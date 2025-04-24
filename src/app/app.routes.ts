import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
      },
      {
        path: 'productos',
        loadChildren: () => import('./products/products.routes').then(m => m.PRODUCTS_ROUTES),
      },
      {
        path: 'proveedores',
        loadChildren: () => import('./providers/providers.routes').then(m => m.PROVIDERS_ROUTES),
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./orders/orders.routes').then(m => m.ORDERS_ROUTES),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./users/users.routes').then(m => m.USERS_ROUTES),
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];
