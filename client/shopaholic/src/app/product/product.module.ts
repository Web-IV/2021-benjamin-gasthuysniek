import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavorietenComponent } from './favorieten/favorieten.component';



@NgModule({
  declarations: [
    ProductComponent,    
    AddProductComponent,
    AddCommentComponent,
    ProductDetailComponent,
    FavorietenComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
