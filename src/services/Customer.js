import axios from "axios";

const baseUrl="https://localhost:7226/api/Customers"

const getAll = () => {        
    const request = axios.get(baseUrl)
    return request.then(response => response.data) 
}

const create = newCustomer => {
    return axios.post(baseUrl, newCustomer)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, remove }