import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./feature/ProductsApi";

export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  })

export default store