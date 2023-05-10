import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityChartWidgetComponent } from './probability-chart-widget.component';

describe('ProbabilityChartWidgetComponent', () => {
  let component: ProbabilityChartWidgetComponent;
  let fixture: ComponentFixture<ProbabilityChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbabilityChartWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbabilityChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
