interface OrderJson{
    userId: number;
    active: boolean;
    creationDate: string;
    orderTotaal: number;
}

export class Order {
    //private _orderId: number;
    constructor(
    private _userId: number,
    private _active: boolean,
    private _creationDate = new Date(),
    private _orderTotaal: number //float in db

    ) {}
 static fromJson(json: OrderJson): Order{
    const order = new Order(json.userId, json.active, new Date(json.creationDate), json.orderTotaal);
    return order;
 }   

  toJSON(): OrderJson {
    return <OrderJson>{       
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
    
  }