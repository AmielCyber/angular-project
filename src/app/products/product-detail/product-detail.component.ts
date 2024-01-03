import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product?: Product;
  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`Name is ${this.product?.name} in the constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} in the ngOnInit`);
  }

  buy() {
    this.bought.emit(this.product?.name);
  }

  get productName(): string {
    console.log(`Get ${this.product?.name}`);
    return this.product?.name ?? "";
  }
}
