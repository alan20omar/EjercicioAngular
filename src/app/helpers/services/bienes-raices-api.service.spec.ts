import { TestBed } from '@angular/core/testing';

import { BienesRaicesApiService } from './bienes-raices-api.service';

describe('BienesRaicesApiService', () => {
  let service: BienesRaicesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienesRaicesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
