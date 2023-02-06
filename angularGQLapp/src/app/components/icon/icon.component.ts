import { Component, Input } from '@angular/core';
import { assets } from 'src/assets/assets';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() filename: (typeof assets)[number] = '/assets/icons/blue-materia.png';
  @Input() alt = '';
  @Input() size = 32;
}
