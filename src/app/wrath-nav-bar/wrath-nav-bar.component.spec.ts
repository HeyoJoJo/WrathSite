import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrathNavBarComponent } from './wrath-nav-bar.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('WrathNavBarComponent', () => {
  let component: WrathNavBarComponent;
  let fixture: ComponentFixture<WrathNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrathNavBarComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrathNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to call navigation', () => {
    let router = TestBed.get(Router);
    let navSpy = spyOn(router, 'navigateByUrl');
    component.onClick("Photos");
    expect(navSpy).toHaveBeenCalledWith("Photos");
  });
});
