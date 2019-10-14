import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrathNavPlaceComponent } from './wrath-nav-place.component';

describe('WrathNavPlaceComponent', () => {
  let component: WrathNavPlaceComponent;
  let fixture: ComponentFixture<WrathNavPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrathNavPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrathNavPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
