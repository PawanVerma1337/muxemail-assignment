import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/v1'

const instance = axios.create()

export default instance
