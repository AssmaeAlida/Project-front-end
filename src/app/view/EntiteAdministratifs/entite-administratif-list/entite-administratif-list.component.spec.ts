import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntiteAdministratifListComponent } from './entite-administratif-list.component';

describe('EntiteAdministratifListComponent', () => {
  let component: EntiteAdministratifListComponent;
  let fixture: ComponentFixture<EntiteAdministratifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntiteAdministratifListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntiteAdministratifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
