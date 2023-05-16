import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyRestAPIService {
  private url: String = 'https://dummyjson.com/products'
  private general_details: String = '&select=title,description,price,stock,thumbnail'

  constructor(
    private _http_client: HttpClient
  ) { }

  public get_n_products_from(limit: number, skip: number): Observable<any> {
    const request = `${this.url}?limit=${limit}&skip=${skip}${this.general_details}`
    return this._http_client.get(request)
  }

  public get_product(id: string): Observable<any> {
    const request = `${this.url}/${id}`
    return this._http_client.get(request)
  }
}
