



import {UUID} from "angular2-uuid";
import {Order} from "../Models/order";
import {Product} from "../Models/product";
import {sampleProducts} from "./sample-products";

export const sampleOrders: Order[] = [{
  id: UUID.UUID(),
  name: 'Order 1',
  notes: 'No cheese',
  products: [sampleProducts[0], sampleProducts[2]]
}, {
  id: UUID.UUID(),
  name: 'Order 2',
  notes: 'Mustard',
  products: [sampleProducts[1], sampleProducts[2]]
}];
