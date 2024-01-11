import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() id = 1;
  product$?: Observable<Product>;
  @Input() product?: Product;
  @Output() bought = new EventEmitter<string>();
  @Output() deleted = new EventEmitter();

  constructor(private productService: ProductsService, public authService: AuthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.product$ = this.productService.getProduct(this.id);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} in the ngOnInit`);
  }

  buy() {
    this.bought.emit(this.product?.name);
  }

  changePrice(product: Product, price: number){
    this.productService
      .updateProduct(product.id, price)
      .subscribe(() => {
        alert(`The price of ${product.name} was changed!`)
      });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    })
  }

  get productName(): string {
    console.log(`Get ${this.product?.name}`);
    return this.product?.name ?? '';
  }
}
