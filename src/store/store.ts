import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../product/slice/productSlice";
import purveyorSlice from "../purveyor/slice/purveyorSlice";

const store = configureStore({
    reducer: {
        purveyor: purveyorSlice,
        product: productSlice
    }
})

type stateTypeRedux = ReturnType<typeof store.getState>

export default store

export type { stateTypeRedux }