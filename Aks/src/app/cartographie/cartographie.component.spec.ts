import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartographieComponent } from './cartographie.component';

describe('CartographieComponent', () => {
  let component: CartographieComponent;
  let fixture: ComponentFixture<CartographieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartographieComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
