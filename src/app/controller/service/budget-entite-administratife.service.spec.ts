import { TestBed } from '@angular/core/testing';

import { BudgetEntiteAdministratifeService } from './budget-entite-administratife.service';

describe('BudgetEntiteAdministratifeService', () => {
  let service: BudgetEntiteAdministratifeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetEntiteAdministratifeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
