import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { ProductService } from './shared/services/product.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModule } from './views/products/products.module';
import { MainModule } from './views/main/main.module';
import { OrderModule } from './views/order/order.module';
import { SharedModule } from './shared/shared.module';
//import { MainComponent } from './components/pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MainModule,
    ProductsModule,
    OrderModule,
    SharedModule,
    AppRoutingModule,
  ],
  //providers: [ProductService],
  providers: [],
  bootstrap: [AppComponent/*, HeaderComponent*/]
})
export class AppModule { }
