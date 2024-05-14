import { Component, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale, ISaleForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { IProduct } from '../products/models';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/models';
import { Store } from '@ngrx/store';
import { selectSaleList } from './store/sale.selectors';
import { SaleActions } from './store/sale.actions';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  sales: ISale[] = [];
  products: IProduct[] = [];
  users: IUser[] = [];

  isLoading = false;

  existsUnsavedChanges = false;

  saleForm = new FormGroup<ISaleForm>({
    quantity: new FormControl(1),
    buyer: new FormControl(null),
    product: new FormControl(null),
  });

  constructor(
    private salesService: SalesService,
    private productsService: ProductsService,
    private usersService: UsersService,
    private store: Store
  ) {}

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
    this.products = this.productsService.getProducts();
  }

  loadSales() {
    // this.isLoading = true;

    this.store.dispatch(SaleActions.loadSales());

    this.store.select(selectSaleList).subscribe({
      next: (sales) => {
        this.sales = sales;
      },
    });

    // this.salesService.getSales().subscribe({
    //   next: (sales) => {
    //     this.sales = sales;
    //   },
    //   error: () => {},
    //   complete: () => {
    //     this.isLoading = false;
    //   },
    // });
  }
}
