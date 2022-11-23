import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComindiffmodComponent } from './comindiffmod.component';

describe('ComindiffmodComponent', () => {
  let component: ComindiffmodComponent;
  let fixture: ComponentFixture<ComindiffmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComindiffmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComindiffmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
