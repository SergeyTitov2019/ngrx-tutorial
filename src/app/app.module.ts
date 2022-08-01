import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgrxTrainingComponent } from "./ngrx-training/ngrx-training.component";
import { DurumComponent } from "./durum/durum.component";

@NgModule({
  declarations: [
    AppComponent,
    NgrxTrainingComponent,
    DurumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
