import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp-of-app-comp',
  templateUrl: './child-comp-of-app-comp.component.html',
  styleUrls: ['./child-comp-of-app-comp.component.css']
})
export class ChildCompOfAppCompComponent {
@Input("dataFromParentComp") public parentData: any;
@Output() public eventFromChildComp = new EventEmitter();

handleClick(inputvalueFromComp: any)
{
this.eventFromChildComp.emit(inputvalueFromComp);
}
}
