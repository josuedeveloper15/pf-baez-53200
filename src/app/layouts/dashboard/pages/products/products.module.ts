import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MatTableModule } from '@angular/material/table';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsService } from './products.service';
import { ProductsMockService } from './products-mock.service';

export const API_URL = new InjectionToken('API_URL');
export const RANDOM_NUMBER = new InjectionToken('RANDOM_NUMBER');
export const PRODUCTS = new InjectionToken('PRODUCTS');

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, MatTableModule, SharedModule],
  exports: [ProductsComponent],
  providers: [
    // ProductsService,
    {
      provide: ProductsService,
      useClass: ProductsService,
    },
    {
      provide: API_URL,
      useValue: 'http://localhost:5001/api',
    },
    {
      provide: RANDOM_NUMBER,
      useFactory: () => {
        return Math.random();
      },
    },
    {
      provide: PRODUCTS,
      useFactory: (productService: ProductsService) => {
        return productService.getProducts();
      },
      deps: [ProductsService],
    },
  ],
})
export class ProductsModule {}
