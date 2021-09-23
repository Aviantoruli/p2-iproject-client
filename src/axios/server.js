import axios from 'axios'

const BASE_URL = "https://hackshoe.herokuapp.com"

const instance = axios.create({
    baseURL: BASE_URL
})

export default instance