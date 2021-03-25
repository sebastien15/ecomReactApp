import { createSlice } from "@reduxjs/toolkit";
import {productInitialState} from "../initialState";

const initialState = productInitialState;

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productsSlice.reducer;