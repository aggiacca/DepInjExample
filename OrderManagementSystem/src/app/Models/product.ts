import { UUID } from 'angular2-uuid';

export class Product {
  constructor(public id: UUID = UUID.UUID(),
              public name: string,
              public description: string,
              public price: number,
      ) {
  }
}
