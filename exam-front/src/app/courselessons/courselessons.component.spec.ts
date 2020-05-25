import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselessonsComponent } from './courselessons.component';

describe('CourselessonsComponent', () => {
  let component: CourselessonsComponent;
  let fixture: ComponentFixture<CourselessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
