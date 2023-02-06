import { Component, Input } from '@angular/core';
import { assets } from 'src/assets/assets';

export type ItemsListItem = { label: string; id: string; icon?: (typeof assets)[number] };

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  @Input() items: ItemsListItem[] = [];
}
