import  axios from "axios"
import axiosinstance from "../axiosconfig";


const REST_API_BASE_URL = "http://localhost:8080/api/customer";


// Example in CustomerServices.js:
const token = localStorage.getItem("token");
let parsedToken
if (token) {
 parsedToken = JSON.parse(token);
  // Continue with parsedToken...
} else {
  console.error("No token found.");
}


const header  = {
    headers: {
        Authorization : `Bearer ${parsedToken}`
    }
}

export const listCustomers = () => {
    return axios.get(REST_API_BASE_URL ,header);

}

export const createCustomer = (Customer) => {
     return   axios.post(REST_API_BASE_URL , Customer ,header,);

}
export const getCustomer = (customerId) => {
    return  axios.get(REST_API_BASE_URL + '/' + customerId , header);
} 

export const updateCustomer = ( Customer) => {
   return  axios.put(REST_API_BASE_URL ,  Customer  ,header)
}

export const deleteCustomer = (customerId) => {

    return  axios.delete(REST_API_BASE_URL + '/'  + customerId , header);
}

export const logIn  = (authreq) => {

return axios.post("http://localhost:8080/login",authreq);

}

export const reg = (User) => {
  
    return axios.post("http://localhost:8080/api/reg",User);
    
    }