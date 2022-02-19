import axios from 'axios'
const token=localStorage.getItem('token')
export const axiosClient = axios.create({

    baseURL:process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Content-Type': ' multipart/form-data',
       
        Authorization: `Bearer ${token}`
    },
    
})
 axiosClient.interceptors.request.use(async (config) => {  
    
     const token=localStorage.getItem('token')
 
 
     if(token) {
         config.headers['Authorization'] = 'Bearer ' + token;
     }
     return config; 
 })
;