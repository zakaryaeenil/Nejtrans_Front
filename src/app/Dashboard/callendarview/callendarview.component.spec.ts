import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallendarviewComponent } from './callendarview.component';

describe('CallendarviewComponent', () => {
  let component: CallendarviewComponent;
  let fixture: ComponentFixture<CallendarviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallendarviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallendarviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
