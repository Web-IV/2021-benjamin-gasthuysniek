export class Order {
    //private _orderId: number;
    constructor(
    private _userId: number,
    private _active: boolean,
    private _creationDate = new Date(),
    private _orderTotaal: number //float in db

    ) {}
      
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