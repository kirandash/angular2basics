import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
     <button (click)="onClicked()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent {
  // Listening to custom event
  @Output('clickable') clicked = new EventEmitter<string>(); // The EventEmitter makes sure to create a custom event
  // @Output keyword makes the event usable outside of this event
  // @Output can take an argument which will be used as name on other components(Not recommended)

  // Listening to native event
  onClicked(){
    //alert('It worked!');
    this.clicked.emit('It works with custom event too!');
  }
}
