import { createSlice } from "@reduxjs/toolkit";
import {products} from "../../data/product.js";


const initialState = {
    items: products,

};
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{}  
})

export default productSlice.reducer;
