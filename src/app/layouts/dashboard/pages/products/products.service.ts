import { Injectable } from '@angular/core';
import { ICreateProductPayload, IProduct } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      environment.baseAPIURL + '/products'
    );
  }

  createProduct(payload: ICreateProductPayload): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      environment.baseAPIURL + '/products',
      payload
    );
  }

  deleteProductById(id: string): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(
      environment.baseAPIURL + '/product/' + id
    );
  }
}
