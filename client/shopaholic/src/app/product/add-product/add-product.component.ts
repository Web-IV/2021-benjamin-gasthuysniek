import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from '../product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 // @Output() public newProduct = new EventEmitter<Product>();
   public product: FormGroup;
  constructor() { }

  ngOnInit() {
    this.product = new FormGroup({
      productClass: new FormControl('Laptop')
    })
  }

  //the addproduct event is called when the button in the html of add product is clicked
  addProduct(productClass:HTMLInputElement,productName: HTMLInputElement, unitPrice: HTMLInputElement, availability: HTMLInputElement, description: HTMLInputElement,userId: HTMLInputElement): boolean{
    console.log(productClass.value);
    console.log(productName.value);
    console.log(unitPrice.value);
    console.log(availability.value);
    console.log(description.value);
    console.log(userId.value);
    //const product = new Product(productClass.value, productName.value, unitPrice.valueAsNumber, availability.valueAsNumber, description.value, userId.valueAsNumber);
    //this.newProduct.emit(product);
    return false;
  }

}
