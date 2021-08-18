import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   @Input() public product: Product;
  

  constructor(private _productDataService: ProductDataService,
    private _router: Router) {}
 
  ngOnInit(): void {

  } 
  deleteProduct() {
    console.log(this.product);
    
    this._productDataService.deleteProduct(this.product);
    //window.location.reload();
  }
  modifyProduct()
  {
   // this._router.navigate(['/product/modify/:id']);
   this._productDataService.setProductToModify(this.product);
   this._router.navigate([`/product/modify/${this.product.productId}`]);
  }
}
