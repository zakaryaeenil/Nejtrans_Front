import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierEnattenteComponent } from './dossier-enattente.component';

describe('DossierEnattenteComponent', () => {
  let component: DossierEnattenteComponent;
  let fixture: ComponentFixture<DossierEnattenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierEnattenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierEnattenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
