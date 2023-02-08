import { MenuItem } from 'src/app/components/list-menu/list-menu.component';
import { inventoryRouteNames, routeNames } from './../../app-routing.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-screen',
  templateUrl: './inventory-screen.component.html',
  styleUrls: ['./inventory-screen.component.scss'],
})
export class InventoryScreenComponent {
  links = inventoryRouteNames;
  menuCategories: MenuItem[] = [
    {
      type: 'link',
      label: 'Materias',
      routerLink: inventoryRouteNames.materia,
    },
    {
      type: 'link',
      label: 'Close',
      routerLink: `/${routeNames.inventory}`,
    },
    {
      type: 'link',
      label: 'Quit',
      routerLink: `../`,
    },
  ];
}
