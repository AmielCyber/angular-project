import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit, OnDestroy {
  private productsSub?: Subscription;
  @ViewChild(ProductDetailComponent) productDetail?: ProductDetailComponent;
  selectedProduct?: Product;
  products: Product[] = [];
  products$?: Observable<Product[]>;

  constructor(private productService: ProductsService) {}

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.getProducts();
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

  private getProducts() {
    this.products$ = this.productService.getProducts();
    /**
    this.productsSub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
     */
  }

}
