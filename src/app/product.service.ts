import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'https://random-data-api.com/api/cannabis/random_cannabis?size=30';
  // private products: Product[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // if(this.products){
    //   return of(this.products);
    // }
    return this.http.get<Product[]>(this.productsUrl);
    // .pipe(
    //   tap(data => this.products = data)
    // )
  }
}
