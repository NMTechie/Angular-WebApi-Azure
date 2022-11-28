import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingexComponent } from './twowaybindingex.component';

describe('TwowaybindingexComponent', () => {
  let component: TwowaybindingexComponent;
  let fixture: ComponentFixture<TwowaybindingexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaybindingexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaybindingexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
