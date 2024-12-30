import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalSurTerreComponent } from './environmental-sur-terre.component';

describe('EnvironmentalSurTerreComponent', () => {
  let component: EnvironmentalSurTerreComponent;
  let fixture: ComponentFixture<EnvironmentalSurTerreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentalSurTerreComponent]
    });
    fixture = TestBed.createComponent(EnvironmentalSurTerreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
