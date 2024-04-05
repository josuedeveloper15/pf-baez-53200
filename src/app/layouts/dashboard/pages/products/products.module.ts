import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule, MatTableModule],
})
export class ProductsModule {}
