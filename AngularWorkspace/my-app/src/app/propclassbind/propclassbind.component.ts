import { Component } from '@angular/core';

@Component({
  selector: 'app-propclassbind',
  templateUrl: './propclassbind.component.html',
  styleUrls: ['./propclassbind.component.css']
})
export class PropclassbindComponent {
public idPropIntsfile = "FirstTextBox";
public valueInSecTextBox = "Hi Second Text Box"

public classFirstBindTextBoxId = "txt1";
public classFirstBindTextBox = "text-special";
public isSpecialApply = true;
public doApplytextconditionalClass = true;

public objectToWrapMultileClassesThatGowithNgClass={
  "text-special": this.isSpecialApply,
  "text-conditional": this.doApplytextconditionalClass
}
}
