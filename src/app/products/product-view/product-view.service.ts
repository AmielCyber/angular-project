import { Injectable } from '@angular/core';
import { Observable, of, mergeMap } from 'rxjs';

import { Product } from '../product';

import { ProductsService } from '../products.service';
@Injectable()
export class ProductViewService {
  private product?: Product;

  constructor(private productService: ProductsService) { }

  getProduct(id: number): Observable<Product> {
    return this.productService.getProducts().pipe(
      mergeMap(products => {
        if (!this.product) {
          this.product = products[id];
        }
        return of(this.product);
      })
    );
  }
  

}
