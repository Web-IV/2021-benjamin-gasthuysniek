import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
//import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavorietenComponent } from './favorieten/favorieten.component';
import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
declarations: [
ProductComponent,
AddProductComponent,
AddCommentComponent,
FavorietenComponent,
ProductListComponent,
ProductFilterPipe
],
imports: [
CommonModule, MaterialModule,HttpClientModule, ReactiveFormsModule
],
exports: [ProductListComponent]
})
export class ProductModule { }
