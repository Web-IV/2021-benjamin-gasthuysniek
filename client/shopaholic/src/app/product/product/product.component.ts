import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string;
  productSizes : string[];
  dateAdded : Date;
  constructor() { 
    this.name = 'IphoneX';
    this.productSizes = ['S', 'M', 'L'];
    this.dateAdded = new Date();
  }

  ngOnInit(): void {
  }

}
