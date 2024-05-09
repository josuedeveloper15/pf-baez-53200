import { ActionReducerMap } from '@ngrx/store';
import { counterFeatureName, counterReducer } from './counter/counter.reducer';
import { authFeatureName, authReducer } from './auth/auth.reducer';

interface RootState {}

export const rootReducer: ActionReducerMap<RootState> = {
  [counterFeatureName]: counterReducer,
  [authFeatureName]: authReducer,
};

/**
 *  {
 *    counter: ...
 *  }
 *  ---------------
 */
