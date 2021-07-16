import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';

import { AddProductComponent } from './product/add-product/add-product.component';
import { AddCommentComponent } from './product/add-comment/add-comment.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { FavorietenComponent } from './product/favorieten/favorieten.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,    
    AddProductComponent,
    AddCommentComponent,
    ProductDetailComponent,
    FavorietenComponent,
    MainNavComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
