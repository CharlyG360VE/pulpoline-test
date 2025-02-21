import { Component, computed, inject, signal } from '@angular/core';
import { LAYOUT_IMPORTS } from './utils/layout-imports.helper';
import { IMenuItem } from '@/interfaces/menu.interface';
import { MenuService } from '@/services/menu.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: LAYOUT_IMPORTS,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {

  private readonly _menuSvc = inject(MenuService);

  menuItems: IMenuItem[] = []
  collapsed = signal(true);
  sidenavWidth = computed(() => this.collapsed() ? '5.6em' : '15em')
  profilePicSize = computed(() => this.collapsed() ? '32' : '100')

  ngOnInit() {
    this.menuItems = this._menuSvc.menuList;
  }

}
