import { receiptType } from "../slice/receiptSlice"

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const saveReceipt = async(receipt: receiptType) => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/create/receipt`, {method: 'POST', body: JSON.stringify(receipt), headers: HEADERS})
    console.log(response);
    const data = await response.json() as receiptType
    return data
}

export const getAllReceipts = async() => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/get/receipts`)
    const data = await response.json() as receiptType
    return data
}