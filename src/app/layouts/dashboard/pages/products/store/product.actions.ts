import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IProduct } from '../models';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ data: IProduct[] }>(),
    'Load Products Failure': props<{ error: unknown }>(),
  },
});
