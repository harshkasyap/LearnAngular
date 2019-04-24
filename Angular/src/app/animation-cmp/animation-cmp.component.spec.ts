import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationCmpComponent } from './animation-cmp.component';

describe('AnimationCmpComponent', () => {
  let component: AnimationCmpComponent;
  let fixture: ComponentFixture<AnimationCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
