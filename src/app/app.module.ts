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

@NgModule({
  // Angular artifacts(components)
  declarations: [
    AppComponent
  ],
  // Other Angular Modules that are contained in this module.
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ],
  // Services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
