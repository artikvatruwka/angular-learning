import { MenuItem } from 'src/app/components/list-menu/list-menu.component';
import { routeNames } from './../../app-routing.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starting-screen',
  templateUrl: './starting-screen.component.html',
  styleUrls: ['./starting-screen.component.scss'],
})
export class StartingScreenComponent {
  routes = routeNames;
  items: MenuItem[] = [
    {
      type: 'link',
      label: 'New Game',
      routerLink: routeNames.mainMenu,
    },
    {
      type: 'link',
      label: 'Continue',
      routerLink: routeNames.mainMenu,
      disabled: true,
    },
    {
      type: 'link',
      label: 'Load Game',
      routerLink: routeNames.loading,
    },
    {
      type: 'link',
      label: 'Options',
      routerLink: routeNames.starting,
    },
  ];
}
