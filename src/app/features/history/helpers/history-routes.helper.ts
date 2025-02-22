import { eAppRoutes } from '@/enums/app-routes.enum';
import { Routes } from '@angular/router';

export const HISTORY_ROUTES: Routes = [
  {
    path: eAppRoutes.SEARCH_HISTORY,
    loadComponent: (async () => await import('../components/history-layout/history-layout.component')),
  }
];