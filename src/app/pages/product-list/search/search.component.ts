import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { GeneralProduct } from 'src/app/models/general-product.interface';
import { DummyRestAPIService } from 'src/app/services/http/dummy-rest-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public products: GeneralProduct[] = []
  public products_found: GeneralProduct[] = []
  public view_products_found: boolean = false
  public view_loading: boolean = true
  public control = new FormControl('')

  constructor(
    private _dummy_rest_api: DummyRestAPIService,
    private _router: Router
  ) { this.init_config() }

  public ngOnInit(): void {
    this.observer_change_search()
  }

  private init_config(): void {
    for(let i=1; i<6; i++){
      this._dummy_rest_api.get_n_products_from(20,(i-1)*20).subscribe(data => {
        data.products.forEach((product: any) => {
          this.add_product(product)
        })
      })
    }
  }

  private add_product(product: any): void {
    let new_product: GeneralProduct = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
      thumbnail: product.thumbnail
    }
    this.products.push(new_product)
  }

  public observer_change_search(): void {
    this.control.valueChanges
    .pipe(
      debounceTime(1000)
    )
    .subscribe(query => {
      if( query==='' ){
        this.products_found = []
        this.view_loading = true
      }
      else
        this.search_query(query)
    })
  }

  public search_query(query: any): void {
    this.products_found = []
    this.view_loading = false
    this.products.filter(product => {
      const title_lower_case = product.title.toLowerCase();
      const description_lower_case = product.description.toLowerCase();
      const search_term_lower_case = query.toLowerCase();
    
      if( title_lower_case.includes(search_term_lower_case) ||
          description_lower_case.includes(search_term_lower_case)) {
        this.products_found.push(product)
      }
    })
  }

  public redirect_product_with_id(id: string): void {
    this._router.navigate([`product/${id}`])
  }

  public set_view_products_found(is_view: boolean = !this.view_products_found): void {
    this.view_products_found = is_view
  }
}
