import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PRODUCTS } from './mock-product';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private _products = PRODUCTS;

  constructor(private http: HttpClient) { }


  get products$(): Observable< Product[] > {
    return this.http.get(`${environment.apiUrl}/products/`).pipe(
      tap(console.log),
      map(
        (list: any[]): Product[] => list.map(Product.fromJSON)              
      )
    );
      }
  addNewProduct(product: Product)
  {
    this._products.push(product);
  }

}
