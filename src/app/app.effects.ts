import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {clear, decrease, handleUpdatedAt, increase} from "./reducers/count/count.action";
import {map} from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, clear),
    map(() => handleUpdatedAt({updatedAt: Date.now()}))
  ))
}
