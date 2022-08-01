import {createFeatureSelector, createSelector} from "@ngrx/store";
import {countNode, CountState} from "./count.reducer";


export const selectorCountFeature = createFeatureSelector<CountState>("count");

export const selectCount = createSelector(
  selectorCountFeature,
  (state:CountState):number => state.count
)

export const selectUpdatedAt = createSelector(
  selectorCountFeature,
  (state:CountState):number => state.updatedAt
)
