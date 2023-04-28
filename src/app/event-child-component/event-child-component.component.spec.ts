import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChildComponentComponent } from './event-child-component.component';

describe('EventChildComponentComponent', () => {
  let component: EventChildComponentComponent;
  let fixture: ComponentFixture<EventChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventChildComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
