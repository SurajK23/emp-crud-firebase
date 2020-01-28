import { TestBed } from '@angular/core/testing';

import { EmpArrayService } from './emp-array.service';

describe('EmpArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpArrayService = TestBed.get(EmpArrayService);
    expect(service).toBeTruthy();
  });
});
