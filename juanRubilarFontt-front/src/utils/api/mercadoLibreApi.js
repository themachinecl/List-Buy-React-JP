import axios from 'axios'

const mercadoLibreApi = axios.create({
    baseURL : "http://localhost:3001/api"
})

export default mercadoLibreApi;
