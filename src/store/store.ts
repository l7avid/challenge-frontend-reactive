import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../product/slice/productSlice";
import purveyorSlice from "../purveyor/slice/purveyorSlice";
import receiptSlice from "../receipt/slice/receiptSlice";

const store = configureStore({
    reducer: {
        purveyor: purveyorSlice,
        product: productSlice,
        receipt: receiptSlice
    }
})

type stateTypeRedux = ReturnType<typeof store.getState>

export default store

export type { stateTypeRedux }