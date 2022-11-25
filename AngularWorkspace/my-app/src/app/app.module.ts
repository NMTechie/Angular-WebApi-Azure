import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewMOutAppmoduleModule } from './new-m-out-appmodule/new-m-out-appmodule.module';
import { NewcinappmodComponent } from './newcinappmod/newcinappmod.component';
import { InterpolationexComponent } from './interpolationex/interpolationex.component';
import { PropclassbindComponent } from './propclassbind/propclassbind.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcinappmodComponent,
    InterpolationexComponent,
    PropclassbindComponent
  ],
  imports: [
    BrowserModule,
    NewMOutAppmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
