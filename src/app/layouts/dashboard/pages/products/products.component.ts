import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './models';
import { API_URL, PRODUCTS, RANDOM_NUMBER } from './products.module';
import { AlertsService } from '../../../../core/services/alerts.service';
import { UsersService } from '../users/users.service';
import { Store } from '@ngrx/store';
import { ProductActions } from './store/product.actions';
import {
  selectIsLoading,
  selectProducts,
  selectProductsError,
  selectProductState,
} from './store/product.selectors';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'actions'];
  products$: Observable<IProduct[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(private productsService: ProductsService, private store: Store) {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.products$ = this.store.select(selectProducts);
    this.error$ = this.store
      .select(selectProductsError)
      .pipe(map((err) => err as Error));
  }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }
}
