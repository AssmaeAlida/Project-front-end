import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressioBesoinEditComponent } from './expressio-besoin-edit.component';

describe('ExpressioBesoinEditComponent', () => {
  let component: ExpressioBesoinEditComponent;
  let fixture: ComponentFixture<ExpressioBesoinEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressioBesoinEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressioBesoinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
