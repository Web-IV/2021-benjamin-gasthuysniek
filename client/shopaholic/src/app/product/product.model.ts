interface ProductJson{
  id: number;
  //productId: number
  productClass: string;
  productName: string;
  unitPrice: number;
  availability: number;
  description: string;
  inStock: boolean;
  userId: number;
}


export class Product {
  private _id: number;
    //private _productId: number;
    constructor(    
      private _productClass: string,
      private _productName: string,
      private _unitPrice: number, //ts equivalent of doubles and ints
      private _availability: number,
      private _description: string,
     
      private _userId: number
      //private _dateAdded = new Date()

    ) {}

    static fromJSON(json: ProductJson): Product {
      const prod = new Product(json.productClass, json.productName, json.unitPrice, json.availability, json.description, json.userId);
      prod._id = json.id;
      return prod;
    }
    get id(): number {
      return this._id;
    }
    toJSON(): ProductJson {
      return <ProductJson>{       
        productClass: this.productClass,
        productName: this.productName,
        unitPrice: this.unitPrice,
        availability: this.availability,
        description: this.description,        
        userId: this.userId,
      };
    }

  
    // [...] other getters


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
   
    
  }