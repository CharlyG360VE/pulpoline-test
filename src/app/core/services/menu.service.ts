
import { eAppRoutes } from '@/enums/app-routes.enum';
import { IMenuItem } from '@/interfaces/menu.interface';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly menuItems = signal<IMenuItem[]>(
    [
      {
        icon: 'home',
        label: 'Inicio',
        route: ''
      },
      {
        icon: 'apartment',
        label: 'Ciudades',
        route: `/${eAppRoutes.WEATHER}`
      },
      {
        icon: 'favorite_border',
        label: 'Favoritos',
        route: `/${eAppRoutes.FAVORITES}`
      },
      {
        icon: 'history',
        label: 'Historial de busqueda',
        route: `/${eAppRoutes.SEARCH_HISTORY}`
      }
    ]
  )

  public get menuList() {
    return this.menuItems();
  }

  constructor() { }

}
