import { TestBed } from '@angular/core/testing';

import { ReturnGuard } from './return.guard';

describe('ReturnGuard', () => {
  let guard: ReturnGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReturnGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
