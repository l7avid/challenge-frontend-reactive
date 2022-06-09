import { configureStore } from '@reduxjs/toolkit';
import purveyorReducer, { purveyorType } from './slice/purveyorSlice'

const store = configureStore({
    reducer: {
        purveyor: purveyorReducer,
    }
});

type stateType = {
    purveyor: purveyorType[]
}

export default store;

export type {stateType}
