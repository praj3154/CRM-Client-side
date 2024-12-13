import  axios  from "axios";

const axiosinstance = axios.create(
{
    headers:{
        "Content-Type" : "application/json"

    }
}
)
// axiosinstance.interceptors.request.use(

// (config) => {

//     const username =  process.env.REACT_APP_API_USERNAME
   
   
//     const password =  process.env.REACT_APP_API_PASSWORD

//    if (username && password) {
//         config.auth = {
//             username : username,
//             password : password
//         }
//    }
//    return config
// }

// )
export default axiosinstance
