import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/CounterSlices.js'
import productReducer from '../redux/slices/ProductsSlice.js'
import basketReducer from '../redux/slices/BasketSlice.js'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket"], 
};

const persistedBasketReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    basket: persistedBasketReducer,
    counter: counterReducer,
    products: productReducer,
  },
});