import { TestBed } from '@angular/core/testing';

import { KeyDataService } from './key-data.service';

describe('KeyDataService', () => {
  let service: KeyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
