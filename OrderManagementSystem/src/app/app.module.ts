import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import {ProductService} from "./Services/product.service";
import {FormsModule} from "@angular/forms";
import {OrderService} from "./Services/order.service";

const appRoutes: Routes = [
  { path: 'app', component: AppComponent, pathMatch: 'full' },
  { path: 'index', component: HomeComponent, pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OrdersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService,
              OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
