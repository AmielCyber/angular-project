import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSortModule} from "@angular/material/sort";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsRoutingModule } from './products-routing.module';
import { PriceComponent } from './price/price.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective,
    ProductViewComponent,
    ProductCreateComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
