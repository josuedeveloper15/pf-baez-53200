import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductActions } from './product.actions';
import { IProduct } from '../models';

export const productFeatureKey = 'product';

export interface State {
  products: IProduct[];
  isLoading: boolean;
  error: unknown;
}

export const initialState: State = {
  products: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  // Accion cargar productos...
  on(ProductActions.loadProducts, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  // Los productos se cargaron sin errores...
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      products: action.data,
    };
  }),

  // Los productos se cargaron con algun error
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  })
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer,
});
