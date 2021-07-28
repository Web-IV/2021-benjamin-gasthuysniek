import { Product } from "./product.model"

const JsonProducts = [
{
    productClass: 'Laptop',
  productName: 'string',
  unitPrice: 200,
  availability: 5,
  description: "good laptop",
  userId: 1,

    /*
  private _productClass: string,
      private _productName: string,
      private _unitPrice: number, //ts equivalent of doubles and ints
      private _availability: number,
      private _description: string,
      private _userId: number
    */
}/*,
{
    name: 'spaghetti',
    ingredients: ['tomato', 'onion', 'celery', 'carrot', 'minced meat'],
    dateAdded: '2020-02-07T18:25:43.511Z'
}*/
]

export const PRODUCTS: Product[]= JsonProducts.map(Product.fromJSON);