import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// NgModule decorator imported from angular core
@NgModule({
  // tells which directives or components to be used
  declarations: [
    AppComponent
  ],
  // Modules imported
  imports: [
    BrowserModule, // has basic features like built in directives etc.
    FormsModule, // form related fields
    HttpModule // for http access
  ],
  providers: [],// application wide services
  bootstrap: [AppComponent] // the default component for our application
})
export class AppModule { }
