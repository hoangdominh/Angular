import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiaoDichComponent } from './giao-dich/giao-dich.component';

import {FormsModule} from "@angular/forms";
import { DsThuChiComponent } from './ds-thu-chi/ds-thu-chi.component';

@NgModule({
  declarations: [
    AppComponent,
    GiaoDichComponent,
    DsThuChiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
