import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseRapportComponent } from './entreprise-rapport.component';

describe('EntrepriseRapportComponent', () => {
  let component: EntrepriseRapportComponent;
  let fixture: ComponentFixture<EntrepriseRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
