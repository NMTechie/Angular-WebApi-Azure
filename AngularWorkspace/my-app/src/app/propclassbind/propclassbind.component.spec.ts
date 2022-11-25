import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropclassbindComponent } from './propclassbind.component';

describe('PropclassbindComponent', () => {
  let component: PropclassbindComponent;
  let fixture: ComponentFixture<PropclassbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropclassbindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropclassbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
