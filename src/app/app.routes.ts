import { Routes } from '@angular/router';
import { Error404Component } from './shared/presentation/pages/error-404/error-404.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/crm' },
  {
    path: 'crm',
    loadChildren: () =>
      import('./hrm/presentation/crm.routes').then((m) => m.CRM_ROUTES),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/presentation/user.routes').then((m) => m.USER_ROUTES),
  },
  { path: '**', component: Error404Component },
];
