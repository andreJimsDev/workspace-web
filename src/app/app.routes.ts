import { Routes } from '@angular/router';
import { Error404Component } from './presentation/shared/pages/error-404/error-404.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/crm' },
  {
    path: 'crm',
    loadChildren: () =>
      import('./presentation/hrm/crm.routes').then((m) => m.CRM_ROUTES),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./presentation/user/user.routes').then((m) => m.USER_ROUTES),
  },
  { path: '**', component: Error404Component },
];
