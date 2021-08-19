import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, pipe, throwError } from 'rxjs';
import { map, tap, delay, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from './order.model';


@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  private _orders$ = new BehaviorSubject<Order[]>([]);
  private _orders : Order[];

  constructor(private http: HttpClient) {
this.orders$.subscribe((orders: Order[])=> {
  this._orders = orders;
  this._orders$.next(this._orders);
})

   }

   get allOrders$(): Observable<Order[]>{
     return this._orders$;
   }


  get orders$(): Observable< Order[] > {
    return this.http.get(`${environment.apiUrl}/orders/`).pipe(
      
        catchError(this.handleError),
        map((list: any[]): Order[] => list.map(Order.fromJson))
      );
      }
  getOrder$(id: string): Observable<Order>{
    return this.http.get(`${environment.apiUrl}/orders/${id}`)
    .pipe(catchError(this.handleError),map(Order.fromJson));
  }
  
  addNewOrder(order:Order)
  {
    return this.http
    .post(`${environment.apiUrl}/orders/`, order.toJSON())
    .pipe(catchError(this.handleError), map(Order.fromJson))
    //observables are cold so nothing happens unless someone subscribes to them
    .subscribe((ord: Order) =>{
      this._orders = [...this._orders, ord];
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
