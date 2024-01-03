/*
The bootstrapping application.
Defines the module that will be loaded at the app startup.
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// The main component of the Angular app.
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';

@NgModule({
  // Angular artifacts(components)
  declarations: [
    AppComponent,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
  ],
  // Other Angular Modules that are contained in this module.
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
  ],
  // Services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
