import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './product';
import { getError, getProducts, State } from './state';
import * as ProductAction from './state/product.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    // this.products$ = this.store.select(getProducts);
    // console.log(':::::::::',this.products$)

    this.store.select(getProducts).subscribe( products => {
      console.log('products============>',products)
    })
    // Do NOT subscribe here because it uses an async pipe
    // this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductAction.loadProducts());

    // Do NOT subscribe here because it uses an async pipe
    // this.selectedProduct$ = this.store.select(getCurrentProduct);

    // Do NOT subscribe here because it uses an async pipe
    // this.displayCode$ = this.store.select(getShowProductCode);
  }
}
