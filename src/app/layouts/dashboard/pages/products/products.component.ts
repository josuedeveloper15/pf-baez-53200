import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './models';
import { API_URL, PRODUCTS, RANDOM_NUMBER } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'actions'];

  // products: IProduct[] = [];

  constructor(
    private productsService: ProductsService,
    @Inject(API_URL) private apiUrl: string,
    @Inject(RANDOM_NUMBER) private randomNumber: number,
    @Inject(PRODUCTS) public products: IProduct[]
  ) {
    console.log(this.apiUrl);
    console.log('random number: ', this.randomNumber);
  }

  ngOnInit(): void {
    // this.products = this.productsService.getProducts();
  }
}
