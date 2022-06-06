import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const loadProducts = createAction(
    '[Product] Load'
);

export const loadProductsSuccess = createAction(
    '[Product] Load Success',
    props<{ products: Product[]}>()
);

export const loadProductsFailure = createAction(
    '[Product] Load Fail',
    props<{ error: string}>()
);