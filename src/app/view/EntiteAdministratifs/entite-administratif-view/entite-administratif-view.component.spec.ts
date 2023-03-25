import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntiteAdministratifViewComponent } from './entite-administratif-view.component';

describe('EntiteAdministratifViewComponent', () => {
  let component: EntiteAdministratifViewComponent;
  let fixture: ComponentFixture<EntiteAdministratifViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntiteAdministratifViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntiteAdministratifViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
