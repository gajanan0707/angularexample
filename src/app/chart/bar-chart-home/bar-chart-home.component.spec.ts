import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartHomeComponent } from './bar-chart-home.component';

describe('BarChartHomeComponent', () => {
  let component: BarChartHomeComponent;
  let fixture: ComponentFixture<BarChartHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
