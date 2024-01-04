import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit {
  @ViewChild(ProductDetailComponent) productDetail?: ProductDetailComponent;
  selectedProduct?: Product;
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  trackByProducts(index: number, product: Product): string {
    return product?.name ?? '';
  }
}
