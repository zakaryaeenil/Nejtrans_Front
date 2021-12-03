import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierEntraitementComponent } from './dossier-entraitement.component';

describe('DossierEntraitementComponent', () => {
  let component: DossierEntraitementComponent;
  let fixture: ComponentFixture<DossierEntraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierEntraitementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierEntraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
