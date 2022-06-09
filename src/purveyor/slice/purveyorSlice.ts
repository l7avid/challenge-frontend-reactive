import { createSlice } from '@reduxjs/toolkit';
import * as React from 'react';

type purveyorType = {
    purveyorId: string,
    purveyorName: string,
    purveyorIdentification: string,
    purveyorEmail: string
}

const initialState = {
    purveyors: [
        {
            purveyorId: "1",
            purveyorName: "David",
            purveyorIdentification: "123",
            purveyorEmail: "david@hotmail.com"
        }
    ]
}

const purveyorSlice = createSlice (
    {
    name: 'purveyor',
    initialState,
    reducers: 
        {
            getPurveyorReducer(state, action){
                const newPurveyors = [...state.purveyors, action.payload]
                const newState = {...state, purveyors: newPurveyors}
                return newState
            }
        }
    }
);
export default purveyorSlice.reducer;

export const {getPurveyorReducer} = purveyorSlice.actions;  

export type {purveyorType}
