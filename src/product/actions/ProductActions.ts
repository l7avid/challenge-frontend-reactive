


const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const savePurveyor = async(product: productType) => {
    const response = await fetch(`http://localhost:8080/create/purveyor`, {method: 'POST', body: JSON.stringify(product), headers: HEADERS})
    const data = await response.json() as productType
    return data
}

export const getAllPurveyors = async() => {
    const response = await fetch(`http://localhost:8080/get/purveyors`)
    const data = await response.json() as productType
    return data
}