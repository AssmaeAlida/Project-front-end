import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntiteAdministratifeListComponent } from './budget-entite-administratife-list.component';

describe('BudgetEntiteAdministratifeListComponent', () => {
  let component: BudgetEntiteAdministratifeListComponent;
  let fixture: ComponentFixture<BudgetEntiteAdministratifeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntiteAdministratifeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntiteAdministratifeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
