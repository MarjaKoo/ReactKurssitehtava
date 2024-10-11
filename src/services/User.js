import axios from "axios";

const baseUrl="https://localhost:7226/api/Users"

const getAll = () => {        
    const request = axios.get(baseUrl)
    return request.then(response => response.data) 
}

const create = newUser => {
    return axios.post(baseUrl, newUser)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (newUser) => {
    return axios.put(`${baseUrl}/${newUser.id}`)
}

// const update = (object) => {
//     return axios.put(`${baseUrl}/${object.userId}`, object)
// }

export default { getAll, create, remove, update }