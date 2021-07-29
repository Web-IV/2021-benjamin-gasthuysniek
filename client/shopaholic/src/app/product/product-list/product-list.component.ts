import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-product';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor(private _productDataService: ProductDataService) { }

  ngOnInit(): void {
  }
  
  get products(){
    return this._productDataService.products;
  }
  addNewProduct(product: Product)
  {
    this._productDataService.addNewProduct(product);
  }
}
