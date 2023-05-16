import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingularProduct } from 'src/app/models/singular-product.interface';
import { DummyRestAPIService } from 'src/app/services/http/dummy-rest-api.service';
import { ListProductCartService } from 'src/app/services/list-product-cart/list-product-cart.service';

@Component({
  selector: 'app-content-product',
  templateUrl: './content-product.component.html',
  styleUrls: ['./content-product.component.css']
})
export class ContentProductComponent {
  private _product_id: string = ''
  public img_collection: Array<object> = []
  public product: SingularProduct = {
    id: '',
    title: '',
    description: '',
    price: '',
    discount_percentage: '',
    rating: '',
    stock: '',
    brand: '',
    category: '',
    images: [''],
    amount: 0,
    total: 0
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dummy_rest_api: DummyRestAPIService,
    private _cart_products_service: ListProductCartService,
    private _router: Router
  ) { this.set_init_config() }

  private set_init_config(): void {
    this._activatedRoute.params.subscribe(params => {
      this._product_id = params['id']
    })
    
    this._dummy_rest_api.get_product(this._product_id).subscribe(response => {
      this.product = {
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
        amount: 0,
        total: 0
      }
      this.set_carousel_images()
    })
  }

  private set_carousel_images(): void {
    this.product.images.forEach((image, key) => {
      this.img_collection.push({
        image: image,
        thumbImage: image,
        alt: `Image ${key+1}`,
        title: ``
      })
    })
  }

  public redirect_product_list(): void {
    this._router.navigate(['product-list'])
  }

  public add_cart_product(): void {
    this._cart_products_service.add_cart_product(this._product_id, 1)
  }
}
