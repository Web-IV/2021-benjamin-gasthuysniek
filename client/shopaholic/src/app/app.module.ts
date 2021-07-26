import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MainNavComponent } from './main-nav/main-nav.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { MaterialModule } from './material/material.module';
import { OrderComponent } from './order/order.component';
import { OrderlineComponent } from './orderline/orderline.component';

@NgModule({
  declarations: [
    AppComponent,    
    MainNavComponent,   
    PageNotFoundComponent, OrderComponent, OrderlineComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
