import axios from "axios";

const baseURL=process.env.REACT_APP_BACKEND_URL
const headers={}

console.log("Base Url",  baseURL)
if (localStorage.token){
    headers.Authorization= `Bearer ${localStorage.token }`;
}


const axiosInstance=axios.create({
    baseURL:baseURL,
    headers,
})

export default axiosInstance;