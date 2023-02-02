import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedItem = 'angularGQLapp';
  itemsToDisplay = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
  handleHatredSelection(item: string) {
    this.selectedItem = item;
  }
}
