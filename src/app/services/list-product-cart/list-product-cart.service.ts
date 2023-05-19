import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import { SingularProduct } from 'src/app/models/singular-product.interface';
import { DummyRestAPIService } from '../http/dummy-rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ListProductCartService {
  public cart_products: SingularProduct[] = []

  constructor(
    private _dummy_rest_api: DummyRestAPIService
  ) { }

  public add_cart_product(id: string, amount: number): void {
    if( this.id_not_in_list(id) ){
      this._dummy_rest_api.get_product(id).subscribe(response => {
        let new_product: SingularProduct = {
          id: response.id,
          title: response.title,
          description: response.description,
          price: response.price,
          discount_percentage: response.discountPercentage,
          rating: response.rating,
          stock: response.stock,
          brand: response.brand,
          category: response.category,
          images: response.images,
          amount: amount,
          total: amount*parseInt(response.price.valueOf())
        }
        this.cart_products.push(new_product)
      })
    } else {
      const productIndex = this.cart_products.findIndex(product => product.id === id);
      if (productIndex !== -1) {
        this.cart_products[productIndex].amount += 1
        this.cart_products[productIndex].total = this.cart_products[productIndex].amount*parseInt(this.cart_products[productIndex].price.valueOf())
      }
    }
  }

  private id_not_in_list(id: string): boolean {
    return !this.cart_products.some(product => product.id.valueOf() === id)
  }
}
