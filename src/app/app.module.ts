import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationDataComponent } from './interpolation-data/interpolation-data.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassandstulebindingComponent } from './classandstulebinding/classandstulebinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationDataComponent,
    PropertyBindingComponent,
    ClassandstulebindingComponent,
    TwowaydatabindingComponent,
    TemplatereferencevariableComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
