import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCmpComponent } from './material-cmp.component';

describe('MaterialCmpComponent', () => {
  let component: MaterialCmpComponent;
  let fixture: ComponentFixture<MaterialCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
