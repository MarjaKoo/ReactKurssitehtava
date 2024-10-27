// import axios from "axios";

// const baseUrl="https://localhost:7226/api/Customers"

// const getAll = () => {        
//     const request = axios.get(baseUrl)
//     return request.then(response => response.data) 
// }

// const create = newCustomer => {
//     return axios.post(baseUrl, newCustomer)
// }

// const remove = id => {
//     return axios.delete(`${baseUrl}/${id}`)
// }

// const update = (object) => {
//     return axios.put(`${baseUrl}/${object.customerId}`, object)
// }

// export default { getAll, create, remove, update }

import axios from "axios"

const baseUrl = "https://localhost:7226/api/Customers"

let token = null

// Tämä on metodi jota kutsutaan aina ennen kuin tehdään muu pyyntö serviceen
// Parametrina annetaan token joka otetaan local storagesta
const setToken = newToken => {
    token = `bearer ${newToken}`
}


const getAll = () => {
    const config = {
        headers: { Authorization: token },
    }
    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}


const create = newCustomer => {
    const config = {
        headers: { Authorization: token },
    }
    return axios.post(baseUrl, newCustomer, config)
}


const remove = id => {
    const config = {
        headers: { Authorization: token },
    }
    return axios.delete(`${baseUrl}/${id}`, config)
}

const update = (object) => {
    const config = {
        headers: { Authorization: token },
    }
    return axios.put(`${baseUrl}/${object.customerId}`, object, config)
}


export default { getAll, create, remove, update, setToken }
