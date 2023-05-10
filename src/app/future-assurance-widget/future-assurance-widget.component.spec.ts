import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureAssuranceWidgetComponent } from './future-assurance-widget.component';

describe('FutureAssuranceWidgetComponent', () => {
  let component: FutureAssuranceWidgetComponent;
  let fixture: ComponentFixture<FutureAssuranceWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureAssuranceWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureAssuranceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
