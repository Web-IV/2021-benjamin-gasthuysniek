import { Component, OnInit } from '@angular/core';
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
  public order: Order;
  constructor(private route = ActivatedRoute, private orderDataService: OrderDataService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.parmMap.get('userId');
    
    
  }

}
