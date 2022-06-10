import { configureStore } from "@reduxjs/toolkit";
import purveyorSlice from "../purveyor/slice/purveyorSlice";

const store = configureStore({
    reducer: {
        purveyor: purveyorSlice
    }
})

type stateTypeRedux = ReturnType<typeof store.getState>

export default store

export type { stateTypeRedux }