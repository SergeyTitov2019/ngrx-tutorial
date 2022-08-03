import {
  CountActions,
  countActionsType,
  CountDecreaseAction,
  CountIncreaseAction,
  increase,
  decrease,
  clear,
  handleUpdatedAt,
  COUNTER_KEY
} from "./count.action";
import {createReducer, on} from "@ngrx/store";

export const countNode = 'count'

export interface CountState {
  [COUNTER_KEY]: number,
  updatedAt: number
}

const initialState: CountState = {
  [COUNTER_KEY]: 0,
  updatedAt: Date.now()
}

export const countReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1,
    // updatedAt: Date.now()

  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1,
    // updatedAt: Date.now()

  })),
  on(clear, state => ({
    ...state,
    count: 0,
    // updatedAt: Date.now()

  })),
  on(handleUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt

  })),


)

// export const countReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case countActionsType.increase:
//       return {
//         ...state,
//         count: state.count + 1,
//         updatedAt: Date.now()
//       }
//     case countActionsType.decrease:
//       return {
//         ...state,
//         count: state.count - 1,
//         updatedAt: Date.now()
//
//       }
//     case countActionsType.clear:
//       return {
//         ...state,
//         count: 0,
//         updatedAt: Date.now()
//       }
//     case countActionsType.updatedAt:
//       return {
//         ...state,
//         updatedAt: action.payload.updatedAt
//       }
//
//     default:
//       return state
//   }
//   return state;
// }
