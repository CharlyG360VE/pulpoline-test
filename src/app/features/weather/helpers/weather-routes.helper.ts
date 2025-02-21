import { eAppRoutes } from '@/enums/app-routes.enum';
import { Routes } from '@angular/router';

export const WEATHER_ROUTES: Routes = [
  {
    path: eAppRoutes.WEATHER,
    loadComponent: (async () => await import('../components/weather-layout/weather-layout.component')),
  }
];