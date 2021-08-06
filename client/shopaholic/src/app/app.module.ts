import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { MaterialModule } from './material/material.module';
import { OrderComponent } from './order/order.component';
import { OrderlineComponent } from './orderline/orderline.component';
import { CommentComponent } from './comment/comment.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
const appRoutes : Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: '', redirectTo: 'product/list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

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
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
