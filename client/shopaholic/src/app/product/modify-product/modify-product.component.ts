import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product.model';
function validateProductClassAndName(control: FormGroup)
: { [key: string]: any }{
  if(
    control.get('productClass').value.length >=3 && control.get('productName').value.length <3
  ){
    return {productClassNoName: true}
  }
  else if(
    control.get('productName').value.length >=3 && control.get('productClass').value.length <3  
  )
  {
    return {productNameNoClass: true}
  }
  return null
}
@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  @Output() public newProduct = new EventEmitter<Product>();
  public newestProduct: Product;
  public product: FormGroup;
  public errorMessage : string = '';
  constructor(private fb: FormBuilder,
    private _productDataService: ProductDataService  ,
   private _router: Router
    ) { }

  ngOnInit() {
  this.product = this.fb.group({
  productClass: this.fb.control('Laptop'
 /*  , [Validators.required, Validators.minLength(3)],
  //async validator
  []  */ 
  ),
  productName: this.fb.control('Rog strix'
  // , [Validators.required, Validators.minLength(3)]
  ),
  unitPrice: this.fb.control(300, 
    //Validators.required
    ),
  availability: this.fb.control(0),
  description: this.fb.control('Good laptop'),  
  inStock: this.fb.control(true)

  },
  {validator: validateProductClassAndName}
  )
  }
  onSubmit()
  {
    //this.newProduct.emit(new Product(this.product.value.productClass, this.product.value.productName, this.product.value.unitPrice, this.product.value.availability, this.product.value.description,this.product.value.userId));
   /* this._productDataService.addNewProduct(
      new Product(this.product.value.productClass, this.product.value.productName, this.product.value.unitPrice, this.product.value.availability, this.product.value.description,this.product.value.userId)
    );*/
 //  this.newestProduct = this._productDataService.productToModify;
   
 this.newestProduct =  new Product(this.product.value.productClass, this.product.value.productName, this.product.value.unitPrice, this.product.value.availability, this.product.value.description,this.product.value.userId)
    ;
    this.newestProduct.setProductId(this._productDataService.productToModify.productId);
   /*this.newestProduct.setProductClass(this.product.value.productClass);
   this.newestProduct.setProductName(this.product.value.productName);
   this.newestProduct.setUnitPrice(this.product.value.unitPrice);
   this.newestProduct.setAvailability(this.product.value.availability);
   this.newestProduct.setDescription(this.product.value.description);
   this.newestProduct.setInStock(this.product.value.inStock);
   */
    this._productDataService.modifyProduct(
     this.newestProduct
      )

    
    this._router.navigate(['/product/list']);
    
  }
  getErrorMessage(errors: any): string {
    //an error occured on the required state
    if(errors.required)
    {
      return 'is required';
    }
    //min length error occured
    else if (errors.minLength)
    {
      return `needs at least ${errors.minlength.requiredLength}
      characters (got ${errors.minlength.actualLength})`;
    }
    else if(errors.productClassNoName)
    {
      return `if productclass is set you need to set the productname`
    }
    else if(errors.productNameNoClass)
    {
      return `if productname is set you need to set the productclass`
    }
  }
 
  
}
