import { createFeatureSelector } from '@ngrx/store';
import { counterFeatureName } from './counter.reducer';

export const counterState = createFeatureSelector(counterFeatureName);
