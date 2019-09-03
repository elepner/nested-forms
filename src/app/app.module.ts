import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PhonesListComponent } from './components/phones-list/phones-list.component';
import { DynamicFormDialogComponent } from './components/dynamic-form-dialog/dynamic-form-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { DynamicFormFieldDirective } from './directives/dynamic-form-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhonesListComponent,
    DynamicFormDialogComponent,
    DynamicFormComponent,
    FormInputComponent,
    DynamicFormFieldDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DynamicFormDialogComponent,
    FormInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
