import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from './user/auth.guard';


const appRoutes : Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/add', 
  canActivate: [AuthGuard],
  component: AddProductComponent},
  
  {path: 'order/detail/:userId', component: OrderComponent},
  {path: 'order/list', component: OrderComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
