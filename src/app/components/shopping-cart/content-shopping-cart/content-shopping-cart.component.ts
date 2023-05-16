import { Component } from '@angular/core';
import { SingularProduct } from 'src/app/models/singular-product.interface';
import { ListProductCartService } from 'src/app/services/list-product-cart/list-product-cart.service';

@Component({
  selector: 'app-content-shopping-cart',
  templateUrl: './content-shopping-cart.component.html',
  styleUrls: ['./content-shopping-cart.component.css']
})
export class ContentShoppingCartComponent {
  public show_cart: boolean = false
  public products!: SingularProduct[]
  public total_price: number = 0

  constructor(
    private _cart_products_service: ListProductCartService
  ) {}

  public set_show_cart(show: boolean = !this.show_cart): void {
    if(show){
      this.products = this._cart_products_service.cart_products
      this.update_total_price()
    } else {
      this._cart_products_service.cart_products = this.products
    }
    this.show_cart = show
  }

  public update_total_price(): void {
    this.total_price = 0
    this.products.forEach(product => {
      this.total_price += product.total
    })
  }

  public delete_product_by_id(id: string): void {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.update_total_price()
  }

  public delete_all_products(): void {
    this.products = []
    this._cart_products_service.cart_products = []
    this.total_price = 0
  }
}
