import { billType } from "../slice/billSlice";

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const saveBill = async(bill: billType) => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/create/bill`, {method: 'POST', body: JSON.stringify(bill), headers: HEADERS})
    console.log(response);
    const data = await response.json() as billType
    return data
}

export const getAllBills = async() => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/get/bills`)
    const data = await response.json() as billType
    return data
}
