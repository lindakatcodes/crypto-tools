import { TestBed } from '@angular/core/testing';

import { CurrencydbService } from './currencydb.service';

describe('CurrencydbService', () => {
  let service: CurrencydbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencydbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
