import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierCompletedComponent } from './dossier-completed.component';

describe('DossierCompletedComponent', () => {
  let component: DossierCompletedComponent;
  let fixture: ComponentFixture<DossierCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
