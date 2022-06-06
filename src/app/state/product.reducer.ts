import { createReducer, on } from "@ngrx/store";
import { Product } from "../product";
import * as ProductAction from './product.actions';

export interface ProductState {
    products: Product[];
    error: string;
  }

  export const customerFeatureKey = 'products';
  
  export const initialState: ProductState = {
    products: [],
    error: ''
  };

  export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductAction.loadProductsSuccess, (state, action): ProductState => {
      return {
        ...state,
        products: action.products,
        error: ''
      };
    }),
    on(ProductAction.loadProductsFailure, (state, action): ProductState => {
      return {
        ...state,
        products: [],
        error: action.error
      };
    })
  );