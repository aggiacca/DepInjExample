import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Order} from '../Models/order';
import { findIndex } from 'lodash';
import {sampleOrders} from '../SampleData/sample-orders';


@Injectable()
export class OrderService {
  orders: Order[];

constructor() {
  this.orders = sampleOrders;
}

  getOrders() {
    return this.orders;
  }

  addOrder(order: Order) {
    this.orders.push(order);
  }

  deleteOrder(order: Order) {
    this.orders.splice(this.orders.indexOf(order), 1);
  }
}
