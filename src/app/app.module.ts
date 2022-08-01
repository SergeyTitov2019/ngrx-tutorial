import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgrxTrainingComponent } from "./ngrx-training/ngrx-training.component";
import { DurumComponent } from "./durum/durum.component";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { RegisterComponent } from "./auth/components/register/register.component";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
