interface OrderLineJson{
    quantity: number;
    price: number;
}

export class Orderline{
    //private _orderId: number;
    //private _productId: number;
    constructor(
    private _quantity: number,
    private _price: number

    ){}

static fromJson(json: OrderLineJson): Orderline{
    const orderLine = new Orderline(json.quantity, json.price);
    return orderLine;
}

    get quantity(): number{
        return this._quantity;
    }

    get price(): number{
        return this._price;
    }
}