import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierImportComponent } from './dossier-import.component';

describe('DossierImportComponent', () => {
  let component: DossierImportComponent;
  let fixture: ComponentFixture<DossierImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
