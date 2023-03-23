import { TestBed } from '@angular/core/testing';

import { ExpressinBesoinService } from './expressin-besoin.service';

describe('ExpressinBesoinService', () => {
  let service: ExpressinBesoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressinBesoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
