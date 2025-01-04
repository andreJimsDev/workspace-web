import { Routes } from '@angular/router';
import { AuthGuard } from '../../user/presentation/guard/auth.guard';
import { LayoutConnectedComponent } from '../../shared/presentation/components/layout-connected/layout-connected.component';
import { DepartmentListComponent } from './pages/department/department-list/department-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const CRM_ROUTES: Routes = [
  {
    path: '',
    component: LayoutConnectedComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'departments',
        component: DepartmentListComponent,
        canActivate: [AuthGuard],
      },
      // Add more child routes for admin features
    ],
  },
];
