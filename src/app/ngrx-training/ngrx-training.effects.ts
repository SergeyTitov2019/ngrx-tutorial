import { Injectable } from "@angular/core";
// import { Actions } from "@ngrx/store-devtools/src/reducer";
// @ts-ignore
import { Effect, Actions, ofType } from "@ngrx/effects"
import {countActionsType, CountUpdatedAtAction} from "../reducers/count/count.action";
import {map} from "rxjs";


@Injectable()
export class AppEffects{
  constructor(private actions$: Actions) {}

  // @Effect()
  // updatedAt$(){
  //   return this.actions$.pipe(
  //     ofType(countActionsType.increase, countActionsType.decrease, countActionsType.updatedAt),
  //     map(() => {
  //       return new CountUpdatedAtAction({
  //         updatedAt: Date.now()
  //       })
  //     })
  //   )
  // }
}
