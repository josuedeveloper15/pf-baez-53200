import { FormControl } from '@angular/forms';
import { IProduct } from '../../products/models';
import { IUser } from '../../users/models';

export interface ISale {
  id: number;
  product?: IProduct;
  user?: IUser;
  userId: string;
  productId: string;
  quantity: number;
}

export interface ISaleForm {
  quantity: FormControl<number | null>;
  user: FormControl<IUser | null>;
  product: FormControl<IProduct | null>;
}

export interface ICreateSaleData {
  product?: IProduct | null;
  user?: IUser | null;
  quantity?: number | null;
}
