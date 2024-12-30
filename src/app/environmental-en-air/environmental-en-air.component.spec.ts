import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalEnAirComponent } from './environmental-en-air.component';

describe('EnvironmentalEnAirComponent', () => {
  let component: EnvironmentalEnAirComponent;
  let fixture: ComponentFixture<EnvironmentalEnAirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentalEnAirComponent]
    });
    fixture = TestBed.createComponent(EnvironmentalEnAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
