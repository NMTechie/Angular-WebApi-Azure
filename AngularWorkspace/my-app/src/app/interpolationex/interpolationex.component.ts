import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolationex',
  templateUrl: './interpolationex.component.html',
  styleUrls: ['./interpolationex.component.css']
})
export class InterpolationexComponent {
public FisrtName = "Nilesh" ;
public LastName = "Mitra";
public inta = 2;
public intb = 0;

CallTheComponettsMethod()
{
  return "just testing";
}
}
