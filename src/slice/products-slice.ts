import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";

type ProductsState = {
  products: Record<string, ProductType>;
};

export type ProductType = {
  id: number,
  type: string,
  article: string,
  size: string,
  availableToOrder: number,
  onTheWayCount: number,
  totalCount: number
}

export const PRODUCTS_INITIAL_STATE: ProductsState = {
  products: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      action.payload.forEach((item) => {
        state.products[item.id] = item;
      });
    },
    setProductField: (state, action: PayloadAction<ProductType>) => {
      state.products[action.payload.id] = action.payload;
    }
  },
});

export const productsReducer = productsSlice.reducer;

export const {setProducts, setProductField} = productsSlice.actions;

export const selectProductsState = (state: RootState) => state.products;

export const selectProductsList = createSelector(
  [selectProductsState],
  (products) =>
    Object.values(products.products)
);

