import axios from 'axios'

const axiosClient = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://www.themealdb.com/api/json/v1/1'
})

export default axiosClient;
