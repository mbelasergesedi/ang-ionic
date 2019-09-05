import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminscritComponent } from './forminscrit.component';

describe('ForminscritComponent', () => {
  let component: ForminscritComponent;
  let fixture: ComponentFixture<ForminscritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminscritComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForminscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
