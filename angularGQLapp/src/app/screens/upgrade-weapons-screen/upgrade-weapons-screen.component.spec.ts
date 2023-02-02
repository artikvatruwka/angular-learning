import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeWeaponsScreenComponent } from './upgrade-weapons-screen.component';

describe('UpgradeWeaponsScreenComponent', () => {
  let component: UpgradeWeaponsScreenComponent;
  let fixture: ComponentFixture<UpgradeWeaponsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpgradeWeaponsScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpgradeWeaponsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
