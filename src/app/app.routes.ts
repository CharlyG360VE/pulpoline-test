import { eAppRoutes } from '@/enums/app-routes.enum';
import { FAVORITES_ROUTES } from '@/favorites/helpers/favorites-routes.helper';
import { HISTORY_ROUTES } from '@/history/helpers/history-routes.helper';
import { HOME_ROUTES } from '@/home/helpers/home-routes.helper';
import { WEATHER_ROUTES } from '@/weather/helpers/weather-routes.helper';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: eAppRoutes.HOME
  },
  {
    path: eAppRoutes.PRINCIPAL,
    loadComponent: (async () => await import('@/layout/layout.component')),
    children: [
      ...HOME_ROUTES,
      ...WEATHER_ROUTES,
      ...FAVORITES_ROUTES,
      ...HISTORY_ROUTES
    ]
  }
];
