import { TestBed } from '@angular/core/testing';

import { CountyService } from './county.service';

describe('CountyService', () => {
  let service: CountyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
