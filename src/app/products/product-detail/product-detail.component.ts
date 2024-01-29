import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable, switchMap, of, filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PriceComponent } from '../price/price.component';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../cart/cart.service';

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
  price?: number;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    public authService: AuthService,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.product$ = this.productService.getProduct(this.id);
  }

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      switchMap(data => of(data['product']))
    );
  }

  buy(product: Product) {
    this.cartService.addProduct(product);
  }
  changePrice(product: Product) {
    this.dialog.open(PriceComponent, {
      data: product.price
    }).afterClosed().pipe(
      filter(price => !!price),
      switchMap(price => this.productService.updateProduct(product.id, price))
    ).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }

  get productName(): string {
    console.log(`Get ${this.product?.name}`);
    return this.product?.name ?? '';
  }
}
