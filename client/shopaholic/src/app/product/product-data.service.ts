import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-product';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private _products = PRODUCTS;

  constructor() { }

  get products(): Product[]
  {
    return this._products;
  }
  addNewProduct(product: Product)
  {
    this._products.push(product);
  }

}
