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
   private ordersOfUser = new Array<Order>();
   private product: Product;
   private userId : number;
   //private productId: number;
  constructor(private route : ActivatedRoute, private orderDataService: OrderDataService, private authService: AuthenticationService, private productDataService: ProductDataService,
    ) {
      
   }

  ngOnInit(): void {
    this.order = new Order(0,true,[],new Date(),0);
    this.settingInitialValues();
    
  }
  /*printout(): void{

      console.log("PRINTING FROM THE PRINTOUT METHOD --------------");
      console.log("printing current user");
      console.log(this.currentUser);
      console.log("printing order");
      console.log(this.order);
      console.log("printing product");
      console.log(this.product);
  }*/
 
  get orderlines$(): Orderline[]{
    return this.order.orderLines;
  }

 

  public settingInitialValues():void{
     //getting the current user
     this.currentUser = this.authService.user$;
   
     //passing productid for new order and creating new order
     this.route.paramMap.subscribe(pa =>
       {
         //this.productId = pa;
         console.log("printing the pa");
         console.log(pa.get("id"));
         this.productId =+ pa.get("id");
        
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
 
  }

  confirmOrderCreation(): void{
    console.log(this.orderDataService.hasCurrentOrder);
    console.log(this.product);
    //has no active order so a new one is created
    if(!this.orderDataService.hasCurrentOrder)
    {
      console.log(this.order);
      this.orderDataService.addNewOrder(this.order);
    }
    else{
      this.orderDataService.addProductToOrder(this.order.orderId,this.product.productId,this.order.orderLines.pop().quantity);
    }
  }

  //test method for retrieving the userid
  getLoggedInUserId(): number{
    this.authService.currentLoggedInUser().subscribe( u => 
      {
        this.userId = u.orders.pop().userId;
        console.log(this.userId);
     //this.ordersOfUser = u.orders;
     //console.log("printing orders of user");
    // console.log(this.ordersOfUser);
      });
      
      return this.userId;
    
  }

}
