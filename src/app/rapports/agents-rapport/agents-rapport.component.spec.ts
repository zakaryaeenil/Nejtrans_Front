import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsRapportComponent } from './agents-rapport.component';

describe('AgentsRapportComponent', () => {
  let component: AgentsRapportComponent;
  let fixture: ComponentFixture<AgentsRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
