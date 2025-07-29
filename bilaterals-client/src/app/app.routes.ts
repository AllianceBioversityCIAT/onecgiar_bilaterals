import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bilaterals',
    pathMatch: 'full'
  },
  {
    path: 'bilaterals',
    loadComponent: () => import('./pages/bilaterals/bilaterals')
  }
];
