import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductActions } from './product.actions';
import { ProductsService } from '../products.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.productsService.getProducts().pipe(
          // El servicio responde OK:
          map((data) => ProductActions.loadProductsSuccess({ data })),

          // El servicio responde FAIL:
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
