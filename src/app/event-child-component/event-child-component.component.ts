import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-child-component',
  templateUrl: './event-child-component.component.html',
  styleUrls: ['./event-child-component.component.css']
})
export class EventChildComponentComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendWish() {
    this.messageEvent.emit('Hii this is Tejaswini');
  }
}
