import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChartDemoComponent } from './base-chart-demo.component';

describe('BaseChartDemoComponent', () => {
  let component: BaseChartDemoComponent;
  let fixture: ComponentFixture<BaseChartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseChartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
