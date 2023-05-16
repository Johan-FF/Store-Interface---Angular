import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralProduct } from 'src/app/models/general-product.interface';
import { DummyRestAPIService } from 'src/app/services/http/dummy-rest-api.service';
import { ListProductCartService } from 'src/app/services/list-product-cart/list-product-cart.service';

@Component({
  selector: 'app-content-product-list',
  templateUrl: './content-product-list.component.html',
  styleUrls: ['./content-product-list.component.css']
})
export class ContentProductListComponent {
  private _active_page: number = 0
  public products: GeneralProduct[] = []

  constructor(
    private _dummy_rest_api: DummyRestAPIService,
    private _cart_products_service: ListProductCartService,
    private _router: Router
  ) { this.change_active_page(1) }

  public change_active_page(pass: number): void {
    this.update_num_active_page(pass)
    this._dummy_rest_api.get_n_products_from(20,(this._active_page-1)*20).subscribe(data => {
      this.products = []
      data.products.forEach((product: any) => {
        this.add_product(product)
      });
    })
  }

  private update_num_active_page(pass: number): void {
    this._active_page += pass
    if( this._active_page<1 )
      this._active_page = 1;
    else if ( this._active_page>5 )
      this._active_page = 5;
  }

  private add_product(product: any): void {
    let new_product: GeneralProduct = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
      thumbnail: product.thumbnail
    };
    this.products.push(new_product);
  }

  public redirect_product_with_id(id: string): void {
    this._router.navigate([`product/${id}`])
  }

  public add_product_to_cart(id: string, amount: number): void {
    this._cart_products_service.add_cart_product(id, amount)
  }
}
