import { ActionReducerMap } from '@ngrx/store';
import { counterFeatureName, counterReducer } from './counter/counter.reducer';

interface RootState {}

export const rootReducer: ActionReducerMap<RootState> = {
  [counterFeatureName]: counterReducer,
};

/**
 *  {
 *    counter: ...
 *  }
 *  ---------------
 */
