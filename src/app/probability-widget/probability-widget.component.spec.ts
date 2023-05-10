import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityWidgetComponent } from './probability-widget.component';

describe('ProbabilityWidgetComponent', () => {
  let component: ProbabilityWidgetComponent;
  let fixture: ComponentFixture<ProbabilityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbabilityWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbabilityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
