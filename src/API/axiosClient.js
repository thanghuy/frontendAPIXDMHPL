import axios from 'axios';
import queryString from 'query-string';
const URL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({
    baseURL : URL,
    headers : {
        'content-type' : 'application/json',
    },
    paramsSerializer : params => queryString.stringify(params),
})

axiosClient.interceptors.request.use( async (config) => {
    return config;
});

axiosClient.interceptors.response.use(response => {
    if(response && response.data){
        return response.data;
    }
    return response;
}, error => {
    throw(error);
});

export default axiosClient;