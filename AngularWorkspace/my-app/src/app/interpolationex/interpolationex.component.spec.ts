import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationexComponent } from './interpolationex.component';

describe('InterpolationexComponent', () => {
  let component: InterpolationexComponent;
  let fixture: ComponentFixture<InterpolationexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
