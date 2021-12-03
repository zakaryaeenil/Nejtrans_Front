import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierExportComponent } from './dossier-export.component';

describe('DossierExportComponent', () => {
  let component: DossierExportComponent;
  let fixture: ComponentFixture<DossierExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
