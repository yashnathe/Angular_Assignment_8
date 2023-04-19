import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() dataEvent = new EventEmitter<string>();

  sendData(data: string) {
    this.dataEvent.emit(data);
  }
}
