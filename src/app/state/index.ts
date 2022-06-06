import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";
import * as fromProduct from './product.reducer';


export interface State {
    products: ProductState;
}


export const selectProductState = createFeatureSelector<fromProduct.ProductState>(
    'fromProduct.customerFeatureKey'
);

export const getProductState = createSelector(
    selectProductState,
      (state: fromProduct.ProductState) => state?.products
);

// Selector functions
// const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
    getProductState,
    state => state
);

export const getError = createSelector(
    getProductState,
    state => state
);