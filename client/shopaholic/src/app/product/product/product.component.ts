import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 // name: string;
 // productDetails : string[];
  //dateAdded : Date;

  @Input() name: string = '';
  constructor() { 
    this.name = 'IphoneX';
   // this.productDetails = ['Default productdetails'];
    //this.dateAdded = new Date();
  
  }

  ngOnInit(): void {
  }

}
