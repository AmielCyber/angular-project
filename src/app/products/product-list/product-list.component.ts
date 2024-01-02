import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {

  @ViewChild(ProductDetailComponent) productDetail?: ProductDetailComponent;

  selectedProduct = 'Microphone';

  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct}!`);
  }

  ngAfterViewInit(): void {
    if(this.productDetail){
      console.log(this.productDetail.name);
    }
  }
}
