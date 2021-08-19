import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { MaterialModule } from '../material/material.module';
import { OrderlineComponent } from '../orderline/orderline.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrderComponent,
    OrderlineComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    ReactiveFormsModule
  ],
  exports:[OrderComponent]
})
export class OrderModule { }
