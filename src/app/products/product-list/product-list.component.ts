import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table"

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [],
})
export class ProductListComponent implements OnInit {
  selectedProduct?: Product;
  products = new MatTableDataSource<Product>([]);
  columnNames = ["name", "price"]
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product){
    this.products.data.push(product);
  }

  onDelete() {
    this.products.data = this.products.data.filter(product => product !== this.selectedProduct)
    this.selectedProduct = undefined;
  }

  private getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = new MatTableDataSource(products);
      this.products.sort = this.sort;
      this.products.paginator = this.paginator;
    });
  }
}
