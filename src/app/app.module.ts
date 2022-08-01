import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgrxTrainingComponent } from "./ngrx-training/ngrx-training.component";
import { DurumComponent } from "./durum/durum.component";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {RegisterComponent} from "./auth/components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    NgrxTrainingComponent,
    DurumComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
