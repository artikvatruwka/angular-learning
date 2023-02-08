import { MateriaViewGQL, MateriaListGQL, MateriaListQuery, MateriaViewQuery } from 'src/app/graphql/generated';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/components/list-menu/list-menu.component';
import { ActivatedRoute } from '@angular/router';

const materiaToListItem = (
  materia: MateriaListQuery['getMaterias'][number],
  itemActive: boolean
): MenuItem | undefined => {
  if (materia === null) return;
  return {
    label: materia?.label || '',
    type: 'link',
    routerLink: `${itemActive ? '../' : ''}${materia._id}`,
  };
};

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.scss'],
})
export class MateriaListComponent implements OnInit {
  constructor(private materiaList: MateriaListGQL, private materia: MateriaViewGQL, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.openMaterias();
    this.route.params.subscribe((item) => {
      this.selectedId = item['id'];
      this.openMateriaView(item['id']);
    });
  }

  materias?: MateriaListQuery['getMaterias'];
  selectedMateria?: MateriaViewQuery['materia'];
  sanitizedMaterias: MenuItem[] = [];
  selectedId?: string;

  openMaterias(): void {
    this.materiaList.fetch().subscribe((val) => {
      this.materias = val.data.getMaterias;
      this.sanitizedMaterias = val.data.getMaterias
        .map((item) => materiaToListItem(item, !!this.selectedId))
        .filter((item) => item != undefined) as MenuItem[];
    });
  }

  openMateriaView(id: string): void {
    this.materia.fetch({ materiaId: id }).subscribe((materia) => {
      this.selectedMateria = materia.data.materia;
      console.log(materia.data.materia);
    });
  }
}
