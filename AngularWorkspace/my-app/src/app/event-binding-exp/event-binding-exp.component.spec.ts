import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingExpComponent } from './event-binding-exp.component';

describe('EventBindingExpComponent', () => {
  let component: EventBindingExpComponent;
  let fixture: ComponentFixture<EventBindingExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
