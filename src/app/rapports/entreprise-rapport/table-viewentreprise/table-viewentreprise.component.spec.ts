import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewentrepriseComponent } from './table-viewentreprise.component';

describe('TableViewentrepriseComponent', () => {
  let component: TableViewentrepriseComponent;
  let fixture: ComponentFixture<TableViewentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViewentrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
