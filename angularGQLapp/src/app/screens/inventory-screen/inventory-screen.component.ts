import { inventoryRouteNames } from './../../app-routing.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-screen',
  templateUrl: './inventory-screen.component.html',
  styleUrls: ['./inventory-screen.component.scss'],
})
export class InventoryScreenComponent {
  links = inventoryRouteNames;
}
