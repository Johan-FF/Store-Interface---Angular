import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgImageSliderModule } from 'ng-image-slider';

import { DummyRestAPIService } from './services/http/dummy-rest-api.service';
import { HttpClientModule } from '@angular/common/http';

import { ContentProductListComponent } from './pages/product-list/content-product-list/content-product-list.component';
import { ContentProductComponent } from './pages/product/content-product/content-product.component';
import { ContentShoppingCartComponent } from './components/shopping-cart/content-shopping-cart/content-shopping-cart.component';
import { ProductDetailComponent } from './components/shopping-cart/product-detail/product-detail.component';
import { ProductCardComponent } from './pages/product-list/product-card/product-card.component';
import { SearchComponent } from './pages/product-list/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentProductListComponent,
    ContentProductComponent,
    ContentShoppingCartComponent,
    ProductDetailComponent,
    ProductCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [
    DummyRestAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
