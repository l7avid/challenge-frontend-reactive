import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';

type billType = {
    billId?: string,
    date: string,
    client: string,
    seller: string,
    totalPaid: number,
    productsId: string[]
}

type newProductType = {
    productId: string,
    units: number,
    price: number
}

const initialState = {
    bills: [
        {
        billId: "",
        date: (new Date).toString(),
        client: "",
        seller: "",
        totalPaid: 0,
        productsId: ["",""]
        }
    ]
}


const billSlice = createSlice({

    name: 'receipt',
    initialState,
    reducers: {
        addBillReducer(state, action){
            const newReceipts = [...state.bills, action.payload]
            const newState = {...state, bills: newReceipts}
            return newState
        },
        getAllBillsReducer(state, action){
            return {...state, bills: action.payload}
        },
        addProductToBillReducer(state, action: PayloadAction<billType>){

            // const isPresent = state.bills.find(productId => action.payload.productsId.includes(productId));
            const extractProductsId = state.bills.map(bill => bill.productsId.values);

            const isPresent = extractProductsId.find(productId => action.payload.productsId.includes(`${productId}`))

            if(isPresent) {
                console.log("product is present in the list");
                
            }else{
                console.log("product is not present un the list");
                // const productsTest = extractProductsId.map(bill => bill )         
            }
        }
        }
    }      
)

export default billSlice.reducer;

export const {addBillReducer, getAllBillsReducer} = billSlice.actions;

export type {billType}

export type {newProductType}