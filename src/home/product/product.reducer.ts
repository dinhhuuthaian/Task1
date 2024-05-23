import { createAction, createReducer } from "@reduxjs/toolkit";
import { initalProductList } from "../../constants/product";
import { Product } from "types/product.type";

interface productState{
    productList: Product[]
}


const initalState: productState = {
    productList: initalProductList
}


export const addProduct = createAction<Product>('product/addProduct')


const productReducer = createReducer(initalState, builder =>{

})

export default productReducer;