import { routeNames } from './../../app-routing.module';
import { Component, Input } from '@angular/core';

interface BaseMenuItem {
  type: string;
  label?: string;
  disabled?: boolean;
  active?: boolean;
}

export interface MenuItemLink extends BaseMenuItem {
  routerLink: routeNames;
  type: 'link';
}

export interface MenuItemButton extends BaseMenuItem {
  type: 'button';
  onclick: () => void;
}
export type MenuItem = MenuItemLink | MenuItemButton;

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
})
export class ListMenuComponent {
  @Input() items: MenuItem[] = [];
}
