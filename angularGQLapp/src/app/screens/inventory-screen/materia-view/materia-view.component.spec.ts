import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaViewComponent } from './materia-view.component';

describe('MateriaViewComponent', () => {
  let component: MateriaViewComponent;
  let fixture: ComponentFixture<MateriaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
