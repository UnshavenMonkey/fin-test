import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {productsReducer} from "./slice/products-slice.ts";

export const createAppReducer = () =>
  combineReducers({
    products: productsReducer,

  });

const reducer = createAppReducer();
export type RootState = ReturnType<typeof reducer>;

export const createAppStore = (initialState?: Partial<RootState>) =>
  configureStore({
    reducer,
    preloadedState: initialState,
  });

export type AppDispatch = ReturnType<typeof createAppStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
