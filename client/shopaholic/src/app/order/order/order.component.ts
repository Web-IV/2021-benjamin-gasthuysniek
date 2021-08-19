import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Orderline } from 'src/app/orderline/orderline.model';
import { ProductDataService } from 'src/app/product/product-data.service';
import { Product } from 'src/app/product/product.model';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { OrderDataService } from '../order-data-service';
import { Order } from '../order.model';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {  
  @Input() public order: Order;
   private currentUser: BehaviorSubject<string>;
 
   private productId: number;  
   private product: Product;
   //private productId: number;
  constructor(private route : ActivatedRoute, private orderDataService: OrderDataService, private authService: AuthenticationService, private productDataService: ProductDataService) {
  
   }

  ngOnInit(): void {
    //getting the current user
     this.currentUser = this.authService.user$;
    
    //passing productid for new order and creating new order
    this.route.paramMap.subscribe(pa =>
      {
        //this.productId = pa;
        console.log("printing the pa");
        console.log(pa.get("id"));
        this.productId =+ pa.get("id");
        /*console.log("printing the PARAMETER");
        console.log(pa);
        this.orderlines.push( new Orderline(0,this.productId =+ pa,1));
        
         this.productDataService.getProduct$(pa.get.toString()).subscribe((prod: Product) =>{
          this.product = prod;
        });
        this.orderDataService.setCurrentOrder(new Order(
            0,true,this.orderlines,new Date(),this.product.unitPrice

        ))*/
      }
      );
      //this.orderlines.push( new Orderline(0,this.productId,1));
      console.log("printing productid")
      console.log(this.productId);
      this.productDataService.getProduct$(this.productId.toString()).subscribe((prod: Product) =>{
        this.product = prod;
        console.log("printing the product in getproduct");
        console.log(this.product);
        this.order = new Order(0,true,[],new Date(),this.product.unitPrice);
        console.log("printing this.order before adding orderline");
        console.log(this.order);
        this.order.addOrderline(this.productId,1);
        console.log("printing order after adding orderline");
        console.log(this.order);
      });

      /*console.log("printing product after assigning in productdataservice.getproduct");
      console.log(this.product);*/
     
      //this.order = new Order(0,true,[],new Date(),this.product.unitPrice);
     /* console.log("printing this.order");
      console.log(this.order);*/

      /*console.log("printing currentuser");
      console.log(this.currentUser);*/
     
     /* console.log("printing orderlines");
      console.log(this.orderlines);*/
     /* console.log("printing product");
      console.log(this.product);*/
     
   /* this.route.paramMap.subscribe(pa =>      
      this.orderDataService.getOrder$(pa.get('id'))     
        .subscribe(item => this.order = item)
    ); */
   // this.printout();

  }
  printout(): void{

      console.log("PRINTING FROM THE PRINTOUT METHOD --------------");
      console.log("printing current user");
      console.log(this.currentUser);
      console.log("printing order");
      console.log(this.order);
      console.log("printing product");
      console.log(this.product);
  }
  get orderlines$(): Orderline[]{
    return this.order.orderLines;
  }
}
