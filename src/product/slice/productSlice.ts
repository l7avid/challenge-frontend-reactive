import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';

type productType = {
    productId?: string,
    productName: string,
    productDescription: string,
    minAmount: number,
    maxAmount: number,
    availableUnits: number,
    productPrice: number,
    purveyorName: string
}

const initialState = {
    products: [
        {
        productId: "",
        productName: "",
        productDescription: "",
        minAmount: 0,
        maxAmount: 0,
        availableUnits: 0,
        productPrice: 0,
        purveyorName: ""
        }
    ]
}


const productSlice = createSlice({

    name: 'product',
    initialState,
    reducers: {
        addProductReducer(state, action){
            const newProducts = [...state.products, action.payload]
            const newState = {...state, products: newProducts}
            return newState
        },
        getAllProductsReducer(state, action){
            return {...state, products: action.payload}
        },
        deleteProductReducer(state, action:PayloadAction<string>){
            const newList = [...state.products.filter(product => product.productId != action.payload)]
            const newState = {...state, products: newList}
    
            return newState
            }
        }
    }      
)

export default productSlice.reducer;

export const {addProductReducer, getAllProductsReducer, deleteProductReducer} = productSlice.actions;

export type {productType}


