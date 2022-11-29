import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './appsimple.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  public holderOfChildEventData: any;
  public parentData = "Here is the Data sent from Parent App Comp";
  handleChildEvent(eventdata: any)
  {
    this.holderOfChildEventData = eventdata;
  }
}
