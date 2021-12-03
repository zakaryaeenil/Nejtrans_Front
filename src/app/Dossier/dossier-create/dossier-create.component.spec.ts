import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierCreateComponent } from './dossier-create.component';

describe('DossierCreateComponent', () => {
  let component: DossierCreateComponent;
  let fixture: ComponentFixture<DossierCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
