import { Component, Input, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   @Input() public product: Product;

  constructor(private _productDataService: ProductDataService) {}
 
  ngOnInit(): void {

  } 
  deleteProduct() {
    this._productDataService.deleteProduct(this.product);
  }
}
