import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalEnAirArComponent } from './environmental-en-air-ar.component';

describe('EnvironmentalEnAirArComponent', () => {
  let component: EnvironmentalEnAirArComponent;
  let fixture: ComponentFixture<EnvironmentalEnAirArComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentalEnAirArComponent]
    });
    fixture = TestBed.createComponent(EnvironmentalEnAirArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
