import axios from 'axios'

const axiosClient = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export default axiosClient;
