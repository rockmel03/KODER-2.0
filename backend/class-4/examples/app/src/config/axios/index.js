import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_BASE_URL + "/api";

const axiosInstance = axios.create({
  baseURL,  
  timeout: 10000,
});


export default axiosInstance