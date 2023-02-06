import { ItemsListItem } from './../../../components/items-list/items-list.component';
import { MateriaViewGQL, MateriaListGQL, MateriaListQuery, MateriaViewQuery, Materia } from 'src/app/graphql/generated';
import { Component, OnInit } from '@angular/core';
import { assets } from 'src/assets/assets';

const materiaIcon = (color?: string | null): (typeof assets)[number] | undefined => {
  if (color === 'green') return '/assets/icons/green-materia.png';
  if (color === 'blue') return '/assets/icons/blue-materia.png';
  if (color === 'red') return '/assets/icons/red-materia.png';
  if (color === 'yellow') return '/assets/icons/yellow-materia.png';
  if (color === 'purple') return '/assets/icons/purple-materia.png';
  return;
};

const materiaToListItem = (materia: MateriaListQuery['getMaterias'][number]): ItemsListItem | undefined => {
  if (materia === null) return;
  return {
    icon: materiaIcon(materia?.color),
    id: materia._id || '',
    label: materia?.label || '',
  };
};

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.scss'],
})
export class MateriaListComponent implements OnInit {
  constructor(private materiaList: MateriaListGQL, private materia: MateriaViewGQL) {}

  ngOnInit(): void {
    this.openMaterias();
  }

  materias?: MateriaListQuery['getMaterias'];
  selectedMateria?: MateriaViewQuery['materia'];

  sanitizedMaterias: ItemsListItem[] = [];

  openMaterias(): void {
    this.materiaList.fetch().subscribe((val) => {
      this.materias = val.data.getMaterias;
      this.sanitizedMaterias = val.data.getMaterias
        .map(materiaToListItem)
        .filter((item) => item != undefined) as ItemsListItem[];
    });
  }

  openMateriaView(): void {
    this.materia.fetch().subscribe((materia) => {
      this.selectedMateria = materia.data.materia;
    });
  }
}
