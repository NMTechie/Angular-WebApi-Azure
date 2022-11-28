import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref-variables',
  templateUrl: './template-ref-variables.component.html',
  styleUrls: ['./template-ref-variables.component.css']
})
export class TemplateRefVariablesComponent {
  public valFromTxt2 = "Initial Value";

  passTxt2Value(inputVal:string) {
    console.log(inputVal)
    this.valFromTxt2 = inputVal;
  }
}
