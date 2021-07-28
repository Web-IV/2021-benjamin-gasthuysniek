export class Product {
    //private _productId: number;
    constructor(
      private _name: string,
      private _productClass: string,
      private _productName: string,
      private _unitPrice: number, //ts equivalent of doubles and ints
      private _availability: number,
      private _description: string,
      private _userId: number


    //private _dateAdded = new Date()

    ) {}
  
    // [...] other getters
    get name(): string {
      return this._name;
    }

    get productClass(): string {
      return this._productClass;
    }

    get productName(): string{
      return this._productName;
    }

    get unitPrice(): number{
      return this._unitPrice;
    }
    
    get availability(): number{
      return this._availability;
    }

    get description(): string{
      return this._description;
    }

    get userId(): number{
      return this._userId;
    }
   
    /*addProductDetail(name: string, amount?: number, unit?: string) {
      this._productDetails.push(`${amount || 1} ${unit || ''} ${name}`);
    }*/
  }