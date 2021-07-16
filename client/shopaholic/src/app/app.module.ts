import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MainNavComponent } from './main-nav/main-nav.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,    
    MainNavComponent,   
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
