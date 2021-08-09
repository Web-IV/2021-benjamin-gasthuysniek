import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product/product-data.service';
import { OrderDataService } from './order-data-service';
import { Order } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {  
  @Input() public order: Order;
  constructor(private route : ActivatedRoute, private orderDataService: OrderDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(pa =>
      this.orderDataService.getOrder$(pa.get('id'))
        .subscribe(item => this.order = item)
    ); 
  }

}
