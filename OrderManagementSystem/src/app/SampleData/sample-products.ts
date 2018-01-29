


import {Product} from "../Models/product";
import {UUID} from "angular2-uuid";

export const sampleProducts: Product[] = [{
  id: UUID.UUID(),
  name: 'Hamburger',
  description: 'American classic',
  price: 5.99
}, {
  id: UUID.UUID(),
  name: 'Hot Dog',
  description: 'Standard',
  price: 3.99
}, {
  id: UUID.UUID(),
  name: 'Water',
  description: 'Drinking Water',
  price: 0.00
}];
