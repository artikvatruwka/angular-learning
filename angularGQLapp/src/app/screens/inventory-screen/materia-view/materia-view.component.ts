import { MateriaViewQuery } from 'src/app/graphql/generated';
import { Component, Input } from '@angular/core';
import { assets } from 'src/assets/assets';

const materiaIcon = (color?: string | null): (typeof assets)[number] | undefined => {
  if (color === 'green') return '/assets/icons/green-materia.png';
  if (color === 'blue') return '/assets/icons/blue-materia.png';
  if (color === 'red') return '/assets/icons/red-materia.png';
  if (color === 'yellow') return '/assets/icons/yellow-materia.png';
  if (color === 'purple') return '/assets/icons/purple-materia.png';
  return;
};

@Component({
  selector: 'app-materia-view',
  templateUrl: './materia-view.component.html',
  styleUrls: ['./materia-view.component.scss'],
})
export class MateriaViewComponent {
  @Input() materia!: MateriaViewQuery['materia'];
  getColor() {
    return materiaIcon(this.materia.color);
  }
}
