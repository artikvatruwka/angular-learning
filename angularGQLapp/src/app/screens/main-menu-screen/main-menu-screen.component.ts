import { routeNames } from './../../app-routing.module';
import { Component } from '@angular/core';
import { MenuItem } from 'src/app/components/list-menu/list-menu.component';

@Component({
  selector: 'app-main-menu-screen',
  templateUrl: './main-menu-screen.component.html',
  styleUrls: ['./main-menu-screen.component.scss'],
})
export class MainMenuScreenComponent {
  items: MenuItem[] = [
    { type: 'link', routerLink: `/${routeNames.inventory}`, label: 'Inventory' },
    { type: 'link', routerLink: `/${routeNames.starting}`, label: '???' },
    { type: 'link', routerLink: `/${routeNames.starting}`, label: '???' },
    { type: 'link', routerLink: `/${routeNames.starting}`, label: '???' },
    { type: 'link', routerLink: `/${routeNames.starting}`, label: '???' },
    { type: 'link', routerLink: `/${routeNames.starting}`, label: '???' },
    { type: 'link', routerLink: `/${routeNames.starting}`, label: '???' },
    { type: 'link', routerLink: `/${routeNames.starting}`, label: 'Quit' },
  ];
}
