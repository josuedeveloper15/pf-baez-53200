import { Component, OnDestroy, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale, ISaleForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { IProduct } from '../products/models';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/models';
import { Store } from '@ngrx/store';
import {
  selectLoadingSales,
  selectSaleList,
  selectSalesError,
} from './store/sale.selectors';
import { SaleActions } from './store/sale.actions';
import { first, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  products: IProduct[] = [];
  users: IUser[] = [];

  existsUnsavedChanges = false;

  saleForm = new FormGroup<ISaleForm>({
    quantity: new FormControl(1),
    user: new FormControl(null),
    product: new FormControl(null),
  });

  loadingSales$: Observable<boolean>;
  error$: Observable<unknown>;
  sales$: Observable<ISale[]>;

  constructor(
    private salesService: SalesService,
    private productsService: ProductsService,
    private usersService: UsersService,
    private store: Store
  ) {
    this.loadingSales$ = this.store.select(selectLoadingSales);
    this.sales$ = this.store.select(selectSaleList);
    this.error$ = this.store.select(selectSalesError);
  }

  ngOnInit(): void {
    this.loadSales();
    this.loadProducts();
    this.loadUsers();
    this.subscribeToSaleFormChange();
  }

  subscribeToSaleFormChange(): void {
    this.saleForm.valueChanges.subscribe({
      next: (v) => {
        this.existsUnsavedChanges = true;
      },
    });
  }

  createSale() {
    this.salesService.createSales(this.saleForm.value).subscribe({
      next: (sales) => {
        console.log(sales);
      },
    });
  }

  loadUsers() {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }

  loadProducts() {
    this.productsService.getProducts().subscribe({
      next: (v) => (this.products = v),
    });
  }

  loadSales() {
    this.store.dispatch(SaleActions.loadSales());
  }
}
