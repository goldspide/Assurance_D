import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAssuranceComponent } from './other-assurance.component';

describe('OtherAssuranceComponent', () => {
  let component: OtherAssuranceComponent;
  let fixture: ComponentFixture<OtherAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherAssuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
