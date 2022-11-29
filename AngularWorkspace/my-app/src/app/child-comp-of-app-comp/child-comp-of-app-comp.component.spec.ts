import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompOfAppCompComponent } from './child-comp-of-app-comp.component';

describe('ChildCompOfAppCompComponent', () => {
  let component: ChildCompOfAppCompComponent;
  let fixture: ComponentFixture<ChildCompOfAppCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompOfAppCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCompOfAppCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
