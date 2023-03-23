import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinViewComponent } from './expression-besoin-view.component';

describe('ExpressionBesoinViewComponent', () => {
  let component: ExpressionBesoinViewComponent;
  let fixture: ComponentFixture<ExpressionBesoinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionBesoinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
