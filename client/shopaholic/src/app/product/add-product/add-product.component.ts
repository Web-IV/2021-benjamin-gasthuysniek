import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() public newProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
/* private _productClass: string,
      private _productName: string,
      private _unitPrice: number, //ts equivalent of doubles and ints
      private _availability: number,
      private _description: string,
      private _userId: number */
  //the addproduct event is called when the button in the html of add product is clicked
  addProduct(productClass:HTMLInputElement,productName: HTMLInputElement, unitPrice: HTMLInputElement, availability: HTMLInputElement, description: HTMLInputElement,userId: HTMLInputElement): boolean{
    console.log(productClass.value);
    console.log(productName.value);
    console.log(unitPrice.value);
    console.log(availability.value);
    console.log(description.value);
    console.log(userId.value);
    const product = new Product(productClass.value, productName.value, unitPrice.valueAsNumber, availability.valueAsNumber, description.value, userId.valueAsNumber);
    this.newProduct.emit(product);
    return false;
  }

}
