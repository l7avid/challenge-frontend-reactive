import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import billSlice from "../bill/slice/billSlice";
import productSlice from "../product/slice/productSlice";
import purveyorSlice from "../purveyor/slice/purveyorSlice";
import receiptSlice from "../receipt/slice/receiptSlice";

const store = configureStore({
    reducer: {
        purveyor: purveyorSlice,
        product: productSlice,
        receipt: receiptSlice,
        bill: billSlice
    }
})

type stateTypeRedux = ReturnType<typeof store.getState>

export const storeDispatch = () => useDispatch<typeof store.dispatch>()

export default store

export type { stateTypeRedux }