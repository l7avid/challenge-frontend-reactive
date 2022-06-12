import { purveyorType } from "../slice/purveyorSlice"


const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const savePurveyor = async(purveyor: purveyorType) => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/create/purveyor`, {method: 'POST', body: JSON.stringify(purveyor), headers: HEADERS})
    const data = await response.json() as purveyorType
    return data
}

export const getAllPurveyors = async() => {
    const response = await fetch(`https://backend-challenge-reactive.herokuapp.com/get/purveyors`)
    const data = await response.json() as purveyorType
    return data
}
