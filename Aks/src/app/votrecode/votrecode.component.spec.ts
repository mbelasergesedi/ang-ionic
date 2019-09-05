import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotrecodeComponent } from './votrecode.component';

describe('VotrecodeComponent', () => {
  let component: VotrecodeComponent;
  let fixture: ComponentFixture<VotrecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotrecodeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotrecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
