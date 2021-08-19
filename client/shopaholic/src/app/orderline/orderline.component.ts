import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product/product-data.service';
import { Product } from '../product/product.model';
import { Orderline } from './orderline.model';

@Component({
  selector: 'app-orderline',
  templateUrl: './orderline.component.html',
  styleUrls: ['./orderline.component.css']
})
export class OrderlineComponent implements OnInit {
  @Input() public orderLine: Orderline;
  //@Input() public product: Observable<Product>;

  constructor(private _productdataservice: ProductDataService
    //, private product: string
    ) { 
    //this.product =  this._productdataservice.getProduct$(productId);
  }

  ngOnInit(): void {
  }

  

}
