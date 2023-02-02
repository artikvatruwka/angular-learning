import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuScreenComponent } from './main-menu-screen.component';

describe('MainMenuScreenComponent', () => {
  let component: MainMenuScreenComponent;
  let fixture: ComponentFixture<MainMenuScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainMenuScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainMenuScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
