// Through this event binding you actually pass values from html templates to component class or ts file
// this is just the opposite of the default flow i.e. ts to template flow

import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-exp',
  templateUrl: './event-binding-exp.component.html',
  styleUrls: ['./event-binding-exp.component.css']
})
export class EventBindingExpComponent {

  public valFromTextBox0 = "";
  performClickOperation()
  {
    this.valFromTextBox0 = "Nilesh";
    console.log("Hi");
  }
  performFocusOut(passedEvent:any)
  {
    console.log(passedEvent);
  }
}
