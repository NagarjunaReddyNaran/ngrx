import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import * as ProductAction from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) { }

  loadProducts$ = createEffect((): any => {
    return this.actions$.pipe(
        ofType(ProductAction.loadProducts),
        mergeMap(()=> this.productService.getProducts().pipe(
            map(products => 
              ProductAction.loadProductsSuccess({products})
            )
        ))
    )
  })
}


