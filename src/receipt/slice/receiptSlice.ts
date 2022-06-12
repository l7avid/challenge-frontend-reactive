import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';

type receiptType = {
    receiptId?: string,
    purveyorId: string,
    date: string,
    productUnits: number,
    productId: string,
}

const initialState = {
    receipts: [
        {
        receiptId: "",
        purveyorId: "",
        productId: "",
        productUnits: 0,
        date: (new Date).toString(),
        }
    ]
}


const receiptSlice = createSlice({

    name: 'receipt',
    initialState,
    reducers: {
        addReceiptReducer(state, action){
            const newReceipts = [...state.receipts, action.payload]
            const newState = {...state, receipts: newReceipts}
            return newState
        },
        getAllReceiptsReducer(state, action){
            return {...state, receipts: action.payload}
        },
        }
    }      
)

export default receiptSlice.reducer;

export const {addReceiptReducer, getAllReceiptsReducer} = receiptSlice.actions;

export type {receiptType}
