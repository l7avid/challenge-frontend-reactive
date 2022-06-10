import { productType } from "../slice/productSlice"

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const saveProduct = async(product: productType) => {
    const response = await fetch(`http://localhost:8080/create/product`, {method: 'POST', body: JSON.stringify(product), headers: HEADERS})
    const data = await response.json() as productType
    return data
}

export const getAllProducts = async() => {
    const response = await fetch(`http://localhost:8080/get/products`)
    const data = await response.json() as productType
    return data
}

export const deleteProduct = async(id: string) => {
    const response = await fetch(`http://localhost:8080/delete/product/${id}`, { method: 'DELETE', headers: HEADERS})
    return {productDeleted: response.ok, productId: id}
}