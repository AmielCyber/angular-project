import { Injectable } from '@angular/core';

import { Product } from '../product';

import { ProductsService } from '../products.service';
@Injectable()
export class ProductViewService {
  private product?: Product;

  constructor(private productService: ProductsService) { }

  getProduct(id: number): Product | undefined {
    const products = this.productService.getProducts();
    if (!this.product) {
      this.product = products[id];
    }
    return this.product;
  }
}
