import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';

type billType = {
    billId?: string,
    date: string,
    clientName: string,
    sellerName: string,
    totalToPay: number,
    productsId: string[]
}

const initialState = {
    bills: [
        {
        billId: "",
        date: (new Date).toString(),
        clientName: "",
        sellerName: "",
        totalToPay: 0,
        productsId: []
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
        }
    }      
)

export default billSlice.reducer;

export const {addBillReducer, getAllBillsReducer} = billSlice.actions;

export type {billType}