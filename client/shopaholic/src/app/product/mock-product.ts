import { Product } from "./product.model"

const JsonProducts = [
{
  productClass: 'Laptop',
  productName: 'Rog Strix 1060',
  unitPrice: 500,
  availability: 5,
  description: "good laptop",
  inStock: true,
  userId: 1,

},
{
  productClass: 'Laptop',
  productName: 'Apple MacBook Pro',
  unitPrice: 1300,
  availability: 5,
  description: "Newest MacBook Pro of 2021",
  inStock: true,
  userId: 1,
}
]

export const PRODUCTS: Product[]= JsonProducts.map(Product.fromJSON);