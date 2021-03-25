import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './product/productSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
    },
});