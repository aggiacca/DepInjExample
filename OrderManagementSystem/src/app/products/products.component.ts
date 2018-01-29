import { Component, OnInit } from '@angular/core';
import {ProductService} from "../Services/product.service";
import {Product} from "../Models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  adding = false;
  editing = false;

  newProd: any = {};
  eProd: Product;

  constructor(private pService: ProductService) { }

  ngOnInit() {
    this.refreshProducts();
  }


  refreshProducts() {
    this.products = this.pService.getProducts();
    console.log(this.products);
  }

  addProd(product: Product) {
    this.pService.addProduct(product);
    this.adding = !this.adding;
    this.refreshProducts();
  }

  delProd(product: Product) {
    this.pService.deleteProduct(product);
    this.refreshProducts();
  }

  editProd(product: Product) {
    this.pService.updateProduct(product);
    this.refreshProducts();
  }

  flipAddProdStatus() {
    this.adding = !this.adding;
    this.newProd = {};
  }

  flipEditProdStatus(product: any = {}) {
    this.eProd = product;
    this.adding = false;
    this.editing = !this.editing;
  }


}
