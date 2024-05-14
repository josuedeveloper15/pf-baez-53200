import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ICreateSaleData, ISale } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

// let SALES_DB: ISale[] = [
//   {
//     id: 1,
//     buyer: {
//       id: 1,
//       createdAt: new Date(),
//       email: 'some@mail.com',
//       firstName: 'TEST',
//       lastName: 'TEST',
//       role: 'USER',
//     },
//     product: {
//       id: 1,
//       name: 'IPAD',
//       price: 1000,
//     },
//     quantity: 2,
//   },
// ];

@Injectable({ providedIn: 'root' })
export class SalesService {
  // CRUD
  // Create, Read, Update y Delete

  constructor(private http: HttpClient) {
    // private httpClient: HttpClient
    // this.httpClient.get('http://myapi.com/users')
  }

  getSales(): Observable<ISale[]> {
    // return of(SALES_DB).pipe(delay(1500));
    return this.http.get<ISale[]>(
      `${environment.baseAPIURL}/sales?_embed=user&_embed=product`
    );
  }

  getSalesByUserId(uid: string): Observable<ISale[]> {
    return this.http.get<ISale[]>(
      `${environment.baseAPIURL}/sales?userId=${uid}&_embed=product`
    );
  }

  createSales(data: ICreateSaleData) {
    if (data.user && data.product && data.quantity) {
      // const newSale: Partial<ISale> = {
      //   id: new Date().getTime(),
      //   user: data.user,
      //   product: data.product,
      //   quantity: data.quantity,
      // };
      // [].push(newSale);
    }
    return of([]);
  }

  deleteSale(id: number) {
    return of([]);
  }

  updateSale(id: number, data: ISale) {
    return of();
    // SALES_DB.map((sale) => (sale.id === id ? { ...sale, ...data } : sale))
  }
}
