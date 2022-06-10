import { createSlice } from '@reduxjs/toolkit';

type purveyorType = {
    purveyorId?: string,
    purveyorName: string,
    purveyorIdentification: string,
    purveyorEmail: string
}

const initialState = {
    purveyors: [
        {
            purveyorId: "",
            purveyorName: "",
            purveyorIdentification: "",
            purveyorEmail: ""
        },
    ]
}

const purveyorSlice = createSlice (
    {
    name: 'purveyor',
    initialState,
    reducers: 
        {
            addPurveyorReducer(state, action){
                const newPurveyors = [...state.purveyors, action.payload]
                const newState = {...state, purveyors: newPurveyors}
                return newState
            },
            getAllPurveyorsReducer(state, action){
                return {...state, purveyors: action.payload}
            }
        }
    }
);
export default purveyorSlice.reducer;

export const {addPurveyorReducer, getAllPurveyorsReducer} = purveyorSlice.actions;  

export type {purveyorType}
