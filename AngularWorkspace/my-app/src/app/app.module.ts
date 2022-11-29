import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewMOutAppmoduleModule } from './new-m-out-appmodule/new-m-out-appmodule.module';
import { NewcinappmodComponent } from './newcinappmod/newcinappmod.component';
import { InterpolationexComponent } from './interpolationex/interpolationex.component';
import { PropclassbindComponent } from './propclassbind/propclassbind.component';
import { EventBindingExpComponent } from './event-binding-exp/event-binding-exp.component';
import { TemplateRefVariablesComponent } from './template-ref-variables/template-ref-variables.component';
import { TwowaybindingexComponent } from './twowaybindingex/twowaybindingex.component';
import { ChildCompOfAppCompComponent } from './child-comp-of-app-comp/child-comp-of-app-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcinappmodComponent,
    InterpolationexComponent,
    PropclassbindComponent,
    EventBindingExpComponent,
    TemplateRefVariablesComponent,
    TwowaybindingexComponent,
    ChildCompOfAppCompComponent
  ],
  imports: [
    BrowserModule,
    NewMOutAppmoduleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
