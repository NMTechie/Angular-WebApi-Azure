import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcinappmodComponent } from './newcinappmod.component';

describe('NewcinappmodComponent', () => {
  let component: NewcinappmodComponent;
  let fixture: ComponentFixture<NewcinappmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcinappmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcinappmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
