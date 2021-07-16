export class Product {
    constructor(
      private _name: string,
      private _productDetails = new Array<string>(),
      private _dateAdded = new Date()
    ) {}
  
    // [...] other getters
    get name(): string {
      return this._name;
    }
   
    addIngredient(name: string, amount?: number, unit?: string) {
      this._productDetails.push(`${amount || 1} ${unit || ''} ${name}`);
    }
  }