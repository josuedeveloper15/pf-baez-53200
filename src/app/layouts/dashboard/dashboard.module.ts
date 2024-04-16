import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UsersModule } from './pages/users/users.module';
import { PipesYDirectivasModule } from './pages/pipes-y-directivas/pipes-y-directivas.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from './pages/products/products.module';
import { Clase09RxjsModule } from './pages/clase-09-rxjs/clase-09-rxjs.module';
import { Clase10Rxjs2Module } from './pages/clase-10-rxjs-2/clase-10-rxjs-2.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UsersModule,
    SharedModule,
    PipesYDirectivasModule,
    ProductsModule,
    Clase09RxjsModule,
    Clase10Rxjs2Module,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
