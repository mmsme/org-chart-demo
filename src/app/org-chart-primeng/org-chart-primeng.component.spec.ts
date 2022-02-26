/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrgChartPrimengComponent } from './org-chart-primeng.component';

describe('OrgChartPrimengComponent', () => {
  let component: OrgChartPrimengComponent;
  let fixture: ComponentFixture<OrgChartPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgChartPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
