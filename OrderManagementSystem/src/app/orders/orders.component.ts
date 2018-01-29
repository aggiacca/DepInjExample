import { Component, OnInit } from '@angular/core';
import {OrderService} from '../Services/order.service';
import {Order} from '../Models/order';
import {ProductService} from '../Services/product.service';
import {Product} from '../Models/product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrderService, ProductService]
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  products: Product[];
  adding = false;
  newOrder: any = {};
  currentProd: Product;
  subProd: Product[] = [];
  constructor(private oService: OrderService,
              private pService: ProductService) { }

  ngOnInit() {
    this.orders = this.oService.getOrders();
    this.products = this.pService.getProducts();
  }

  addSubProd() {
    this.subProd.push(this.currentProd);
  }

  refreshOrders() {
    this.orders = this.oService.getOrders();
  }

  addOrder(order: Order) {
    order.products = this.subProd;
    this.oService.addOrder(order);
    this.adding = !this.adding;
    this.refreshOrders();
  }

  delOrder(order: Order) {
    this.oService.deleteOrder(order);
    this.refreshOrders();
  }

  flipAddOrderStatus() {
    this.newOrder = {};
    this.subProd = [];
    this.adding = !this.adding;
  }
}
