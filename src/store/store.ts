import { configureStore } from "@reduxjs/toolkit";
import purveyorSlice from "../purveyor/slice/PurveyorSlice";

const store = configureStore({
    reducer: {
        purveyor: purveyorSlice
    }
})

type stateType = ReturnType<typeof store.getState>

export default store

export type { stateType }