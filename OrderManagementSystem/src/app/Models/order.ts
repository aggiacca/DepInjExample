
import {Product} from './product';
import {UUID} from 'angular2-uuid';

export class Order {
  constructor(public id: UUID = UUID.UUID(),
              public name: string,
              public notes: string,
              public products: Product[]
  ) {
  }
}
