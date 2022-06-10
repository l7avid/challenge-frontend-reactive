import { purveyorType } from "../slice/purveyorSlice"


const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const savePurveyor = async(purveyor: purveyorType) => {
    const response = await fetch(`http://localhost:8080/create/purveyor`, {method: 'POST', body: JSON.stringify(purveyor), headers: HEADERS})
    const data = await response.json() as purveyorType
    return data
}

export const getAllPurveyors = async() => {
    const response = await fetch(`http://localhost:8080/get/purveyors`)
    const data = await response.json() as purveyorType
    return data
}
