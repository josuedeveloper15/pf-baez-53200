import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICreateProductPayload, IProduct } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ data: IProduct[] }>(),
    'Load Products Failure': props<{ error: unknown }>(),

    'Create Product': props<{ payload: ICreateProductPayload }>(),
    'Create Product Success': props<{ data: IProduct }>(),
    'Create Product Failure': props<{ error: unknown }>(),

    'Delete Product By Id': props<{ id: string }>(),
    'Delete Product By Id Success': props<{ data: IProduct }>(),
    'Delete Product By Id Failure': props<{ error: HttpErrorResponse }>(),
  },
});
