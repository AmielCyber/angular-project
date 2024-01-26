import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { priceRangeValidator } from '../price-range.directive';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{
  @Output() added = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl("", {
      nonNullable: true,
      validators: Validators.required
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, priceRangeValidator()]
    })
  })

  showPriceRangeHint = false;


  constructor(private productService: ProductsService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.price.valueChanges.subscribe(price => {
      if(price){
        this.showPriceRangeHint = price > 1 && price < 10000;
      }
    })
  }

  createProduct(){
    this.productService.addProduct(this.name.value,Number(this.price.value))
      .subscribe(product => {
        this.productForm.reset();
        this.added.emit(product)
      });
  }

  private buildForm() {
    this.productForm = this.builder.nonNullable.group({
      name: this.builder.nonNullable.control(''),
      price: this.builder.nonNullable.control<number | undefined>(undefined, {})
    });
  }


  get price(){
    return this.productForm.controls.price;
  }

  get name() {
    return this.productForm.controls.name;
  }

}
