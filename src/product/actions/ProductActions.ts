import { productType } from "../slice/productSlice"

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const saveProduct = async(product: productType) => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/create/product`, {method: 'POST', body: JSON.stringify(product), headers: HEADERS})
    const data = await response.json() as productType
    return data
}

export const getAllProducts = async() => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/get/products`)
    const data = await response.json() as productType
    return data
}

export const deleteProduct = async(id: string) => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/delete/product/${id}`, { method: 'DELETE', headers: HEADERS})
    return {productDeleted: response.ok, productId: id}
}

export const updateProduct = async(product: productType) => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/update/product`, {method: 'PUT', body: JSON.stringify(product), headers: HEADERS})
    console.log(response);
    const data = await response.json() as productType
    return data
}