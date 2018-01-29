import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../Models/product';
import { findIndex } from 'lodash';
import {sampleProducts} from "../SampleData/sample-products";

@Injectable()
export class ProductService {
  products: Product[];


constructor() {
  this.products = sampleProducts;
}


  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    console.log(product);
    this.products.push(product);
  }

  deleteProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);

  }

  updateProduct(product: Product) {
    const index = findIndex(this.products, (p: Product) => {
      return p.id === product.id;
    });
    this.products[index] = product;
  }



}
