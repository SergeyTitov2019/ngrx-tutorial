import {Component, OnInit} from '@angular/core';
import {CountState} from "../reducers/count/count.reducer";
import {select, Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {selectCount, selectUpdatedAt} from "../reducers/count/count.selector";
import {CountClearAction, CountDecreaseAction, CountIncreaseAction} from "../reducers/count/count.action";

@Component({
  selector: 'app-ngrx-training',
  templateUrl: './ngrx-training.component.html',
  styleUrls: ['./ngrx-training.component.css']
})
export class NgrxTrainingComponent implements OnInit {

  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public disableDecrease$: Observable<boolean> = this.count$.pipe(map(i => i <= 0))
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  date = new Date()

  constructor(private store$: Store<CountState>) {
  }


  ngOnInit(): void {
  }

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease() {
    this.store$.dispatch(new CountDecreaseAction());

  }

  clear() {
    this.store$.dispatch(new CountClearAction());

  }
}
