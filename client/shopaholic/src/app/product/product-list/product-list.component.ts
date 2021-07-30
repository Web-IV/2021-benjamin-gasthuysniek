import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PRODUCTS } from '../mock-product';
import{distinctUntilChanged, debounceTime,map,filter} from 'rxjs/operators'

import { ProductDataService } from '../product-data.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public filterProductName: string;
  //storing the filter in an observable
  public filterProduct$ = new Subject<string>();
  constructor(private _productDataService: ProductDataService) { 
    //subscribe to act on the values fired from the observable
    this.filterProduct$
    .pipe(distinctUntilChanged(),
    debounceTime(400),
    map(val => val.toLowerCase()),
    filter(val => !val.startsWith('s'))
    )
    .subscribe(
      val => this.filterProductName = val);
    
  }
 
  ngOnInit(): void {
  }
  applyFilter(filter:string)
  {
    this.filterProductName = filter;
  }
  get products(){
    return this._productDataService.products;
  }
  addNewProduct(product: Product)
  {
    this._productDataService.addNewProduct(product);
  }
}
