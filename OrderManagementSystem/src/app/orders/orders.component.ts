import { Component, OnInit } from '@angular/core';
import {OrderService} from "../Services/order.service";
import {Order} from "../Models/order";
import {ProductService} from "../Services/product.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrderService, ProductService]
})
export class OrdersComponent implements OnInit {
  orders: Order[];

  adding = false;
  editing = false;

  newOrder: any = {};
  eOrder: Order;


  constructor(private oService: OrderService) { }

  ngOnInit() {
    this.orders = this.oService.getOrders();
  }

  refreshOrders() {
    this.orders = this.oService.getOrders();
    console.log(this.orders);
  }

  addOrder(order: Order) {
    this.oService.addOrder(order);
    this.adding = !this.adding;
    this.refreshOrders();
  }

  delOrder(order: Order) {
    this.oService.deleteOrder(order);
    this.refreshOrders();
  }

  editOrder(order: Order) {
    this.oService.updateOrder(order);
    this.refreshOrders();
  }

  flipAddOrderStatus() {
    this.adding = !this.adding;
    this.newOrder = {};
  }

  flipEditOrderStatus(order: any = {}) {
    this.eOrder = order;
    this.adding = false;
    this.editing = !this.editing;
  }

}
