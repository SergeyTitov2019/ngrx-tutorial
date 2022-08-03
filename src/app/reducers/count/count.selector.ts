import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountState } from "./count.reducer";
import { COUNTER_KEY } from "./count.action";


export const selectorCountFeature = createFeatureSelector<CountState>(COUNTER_KEY);

export const selectCount = createSelector(
  selectorCountFeature,
  (state:CountState):number => state.count
)

export const selectUpdatedAt = createSelector(
  selectorCountFeature,
  (state:CountState):number => state.updatedAt
)
