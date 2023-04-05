import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntiteAdministratifeCreateComponent } from './budget-entite-administratife-create.component';

describe('BudgetEntiteAdministratifeCreateComponent', () => {
  let component: BudgetEntiteAdministratifeCreateComponent;
  let fixture: ComponentFixture<BudgetEntiteAdministratifeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntiteAdministratifeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntiteAdministratifeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
