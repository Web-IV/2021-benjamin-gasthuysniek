import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, pipe, throwError } from 'rxjs';
import { map, tap, delay, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PRODUCTS } from './mock-product';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private _products$ = new BehaviorSubject<Product[]>([]);
  private _products : Product[];

  constructor(private http: HttpClient) {
this.products$.subscribe((products: Product[])=> {
  this._products = products;
  this._products$.next(this._products);
})

   }

   get allProducts$(): Observable<Product[]>{
     return this._products$;
   }


  get products$(): Observable< Product[] > {
    return this.http.get(`${environment.apiUrl}/products/`).pipe(
      
        catchError(this.handleError),
        map((list: any[]): Product[] => list.map(Product.fromJSON))
      );
      }

  
  addNewProduct(product: Product)
  {
    return this.http
    .post(`${environment.apiUrl}/products/`, product.toJSON())
    .pipe(catchError(this.handleError), map(Product.fromJSON))
    //observables are cold so nothing happens unless someone subscribes to them
    .subscribe((prod: Product) =>{
      this._products = [...this._products, prod];
    });
  }
  handleError(err: any): Observable<never>{
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else if (err instanceof HttpErrorResponse){
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    }
      else{
      errorMessage = `an unknown error occured ${err}`;
      }
    
    return throwError(errorMessage);
  }
}
