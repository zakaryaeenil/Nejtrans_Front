import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsRapportComponent } from './clients-rapport.component';

describe('ClientsRapportComponent', () => {
  let component: ClientsRapportComponent;
  let fixture: ComponentFixture<ClientsRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
