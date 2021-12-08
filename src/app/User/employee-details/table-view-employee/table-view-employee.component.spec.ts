import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewEmployeeComponent } from './table-view-employee.component';

describe('TableViewEmployeeComponent', () => {
  let component: TableViewEmployeeComponent;
  let fixture: ComponentFixture<TableViewEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViewEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
