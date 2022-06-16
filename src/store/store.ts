import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import billSlice from "../bill/slice/billSlice";
import productSlice from "../product/slice/productSlice";
import purveyorSlice from "../purveyor/slice/purveyorSlice";
import receiptSlice from "../receipt/slice/receiptSlice";
import loggedInReducer from "../login/slice/loginSlice"

const store = configureStore({
    reducer: {
        purveyor: purveyorSlice,
        product: productSlice,
        receipt: receiptSlice,
        bill: billSlice,
        logged: loggedInReducer
    }
})

type stateTypeRedux = ReturnType<typeof store.getState>

export default store

export type { stateTypeRedux }