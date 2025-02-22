import { eAppRoutes } from '@/enums/app-routes.enum';
import { Routes } from '@angular/router';

export const FAVORITES_ROUTES: Routes = [
  {
    path: eAppRoutes.FAVORITES,
    loadComponent: (async () => await import('../components/favorites-layout/favorites-layout.component')),
  }
];