import { createSlice } from '@reduxjs/toolkit';
import * as React from 'react';

type purveyorType = {
    id: string,
    purveyorName: string,
    purveyorIdentification: string,
    purveyorEmail: string

}

const initialState: purveyorType[] = [
    {
        id: '1',
        purveyorName: "David",
        purveyorIdentification: "123",
        purveyorEmail: "david@hotmail.com"
    }
]

const purveyorSlice = createSlice({
    name: 'purveyor',
    initialState,
    reducers: {
        getPurveyors(state, action){
            state.push(action.payload)
        },
        deletePurveyor(state, action){
            state.push(action.payload)
        },
        createPurveyor(state, action){
            state.push(action.payload)
        }
    }
});

export const {getPurveyors, deletePurveyor, createPurveyor} = purveyorSlice.actions;
export default purveyorSlice.reducer;
export type {purveyorType}

