import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map, tap, delay, catchError } from 'rxjs/operators';
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
      //delay(200),
      catchError(),
      map(
        (list: any[]): Product[] => list.map(Product.fromJSON)              
      )
    );
      }

  handleError(err: any){
    let errorMessage: string;
    if (err instanceof HttpErrorResponse){
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    }
      else{
      errorMessage = `an unknown error occured ${err}`;
      }
    console.error(err);
  }
  addNewProduct(product: Product)
  {
   // this._products.push(product);
    // this.http.post(`${environment.apiUrl}/products/`).
  }

}
