import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsThuChiComponent } from './ds-thu-chi.component';

describe('DsThuChiComponent', () => {
  let component: DsThuChiComponent;
  let fixture: ComponentFixture<DsThuChiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsThuChiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsThuChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
