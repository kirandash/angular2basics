import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component'; // Include the component for other selector

// NgModule decorator imported from angular core
@NgModule({
  // tells which directives or components to be used
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent // Include all the components to be used
  ],
  // Modules imported
  imports: [
    BrowserModule, // has basic features like built in directives etc.
    FormsModule, // form related fields
    HttpModule // for http access
  ],
  providers: [],// application wide services
  bootstrap: [AppComponent] // the default component for our application to bootstrap when initialized
})
export class AppModule { }
