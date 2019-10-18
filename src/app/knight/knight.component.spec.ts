import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightComponent } from './knight.component';

describe('KnightComponent', () => {
  let component: KnightComponent;
  let fixture: ComponentFixture<KnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with false on selected', () => {
    expect(component.getIsSelected()).toBe(false);
  });

  it('should be able to toggle is selected', () => {
    component.toggleIsSelected();
    expect(component.getIsSelected()).toBe(true);
  });

  it('should create with expanded as false', () => {
    expect(component.getIsExpanded()).toBe(false);
  });

  it('should toggle the expanded prop on click method', () => {
    component.onClick();
    expect(component.getIsExpanded()).toBe(true);
  });
});
