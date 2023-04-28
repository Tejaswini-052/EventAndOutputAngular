import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventAndOutputProblem';
  message: string | undefined;

  receiveWish($event: string | undefined) {
    this.message = $event;
  }
}
