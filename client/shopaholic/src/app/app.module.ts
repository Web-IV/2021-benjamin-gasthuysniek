import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { MaterialModule } from './material/material.module';

import { OrderlineComponent } from './orderline/orderline.component';
import { CommentComponent } from './comment/comment.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { httpInterceptorProviders } from './interceptors';
import { OrderModule } from './order/order.module';
import { OrderComponent } from './order/order/order.component';



@NgModule({
  declarations: [
    AppComponent,        
    PageNotFoundComponent, OrderComponent, OrderlineComponent, CommentComponent, MainNavComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    MaterialModule,    
    LayoutModule,   
    AppRoutingModule, OrderModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
