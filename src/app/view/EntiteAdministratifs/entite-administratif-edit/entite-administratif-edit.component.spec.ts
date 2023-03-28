import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntiteAdministratifEditComponent } from './entite-administratif-edit.component';

describe('EntiteAdministratifEditComponent', () => {
  let component: EntiteAdministratifEditComponent;
  let fixture: ComponentFixture<EntiteAdministratifEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntiteAdministratifEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntiteAdministratifEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
