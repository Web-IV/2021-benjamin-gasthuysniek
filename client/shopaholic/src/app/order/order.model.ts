import { Orderline, OrderLineJson } from "../orderline/orderline.model";

interface OrderJson{
    orderId: number;
    userId: number;
    active: boolean;
    orderLines: OrderLineJson[];
    creationDate: string;
    orderTotaal: number;
}

export class Order {
    private _orderId: number;
    constructor(
    private _userId: number,
    private _active: boolean,
    private _orderLines = new Array<Orderline>(),
    private _creationDate = new Date(),
    private _orderTotaal: number //float in db

    ) {}
 static fromJson(json: OrderJson): Order{
    const order = new Order(
      json.userId,
       json.active,
       json.orderLines.map(Orderline.fromJson)
       ,new Date(json.creationDate), json.orderTotaal);
    order._orderId = json.orderId;
       return order;
 }   

  toJSON(): OrderJson {
    return <OrderJson>{  
      orderId: this.orderId,    
      userId: this.userId,
      active: this.active,
      creationDate: this.creationDate.toString(),
      orderTotaal: this.orderTotaal     
    };
  }




    get userId(): number{
        return this._userId;
    }

    get active(): boolean{
        return this._active;
    }

    get creationDate(): Date{
        return this._creationDate;
    }

    get orderTotaal(): number{
        return this._orderTotaal;
    }

    get orderId(): number{
      return this._orderId;
    }

    get orderLines(): Orderline[]{
      return this._orderLines;
    }

    addOrderline(productid: number, quantity: number)
    {
      this._orderLines.push(new Orderline(0,productid, quantity));
    }
    
  }