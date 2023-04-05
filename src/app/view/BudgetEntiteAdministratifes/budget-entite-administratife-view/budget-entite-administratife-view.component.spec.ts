import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntiteAdministratifeViewComponent } from './budget-entite-administratife-view.component';

describe('BudgetEntiteAdministratifeViewComponent', () => {
  let component: BudgetEntiteAdministratifeViewComponent;
  let fixture: ComponentFixture<BudgetEntiteAdministratifeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntiteAdministratifeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntiteAdministratifeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
