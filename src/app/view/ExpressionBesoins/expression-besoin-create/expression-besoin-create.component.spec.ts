import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinCreateComponent } from './expression-besoin-create.component';

describe('ExpressionBesoinCreateComponent', () => {
  let component: ExpressionBesoinCreateComponent;
  let fixture: ComponentFixture<ExpressionBesoinCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionBesoinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
