import { billType } from "../slice/billSlice";

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const saveBill = async(bill: billType) => {
    const response = await fetch(`http://localhost:8080/create/bill`, {method: 'POST', body: JSON.stringify(bill), headers: HEADERS})
    console.log(response);
    const data = await response.json() as billType
    return data
}

export const getAllBills = async() => {
    const response = await fetch(`http://localhost:8080/get/bills`)
    const data = await response.json() as billType
    return data
}