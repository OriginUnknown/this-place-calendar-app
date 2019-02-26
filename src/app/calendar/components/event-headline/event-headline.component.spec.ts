import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHeadlineComponent } from './event-headline.component';

describe('EventComponent', () => {
  let component: EventHeadlineComponent;
  let fixture: ComponentFixture<EventHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
