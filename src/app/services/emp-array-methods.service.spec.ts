import { TestBed } from '@angular/core/testing';

import { EmpArrayMethodsService } from './emp-array-methods.service';

describe('EmpArrayMethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpArrayMethodsService = TestBed.get(EmpArrayMethodsService);
    expect(service).toBeTruthy();
  });
});
