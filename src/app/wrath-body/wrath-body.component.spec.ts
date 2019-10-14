import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrathBodyComponent } from './wrath-body.component';

describe('WrathBodyComponent', () => {
  let component: WrathBodyComponent;
  let fixture: ComponentFixture<WrathBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrathBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrathBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
