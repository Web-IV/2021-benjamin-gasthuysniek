export class Orderline{
    //private _orderId: number;
    //private _productId: number;
    constructor(
    private _quantity: number,
    private _price: number

    ){}

    get quantity(): number{
        return this._quantity;
    }

    get price(): number{
        return this._price;
    }
}