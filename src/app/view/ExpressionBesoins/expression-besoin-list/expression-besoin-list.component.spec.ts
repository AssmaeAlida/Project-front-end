import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinListComponent } from './expression-besoin-list.component';

describe('ExpressionBesoinListComponent', () => {
  let component: ExpressionBesoinListComponent;
  let fixture: ComponentFixture<ExpressionBesoinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionBesoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
