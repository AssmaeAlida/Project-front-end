import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntiteAdministratifeEditComponent } from './budget-entite-administratife-edit.component';

describe('BudgetEntiteAdministratifeEditComponent', () => {
  let component: BudgetEntiteAdministratifeEditComponent;
  let fixture: ComponentFixture<BudgetEntiteAdministratifeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntiteAdministratifeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntiteAdministratifeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
