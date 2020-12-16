import axiosClient from './axiosClient';

const UserAPI = {
    Login : (params) =>{
        const url = "/customers/login";
        return axiosClient.post(url,params);
    },
    CreateUser : (params) =>{
        const url = "/customers/register";
        return axiosClient.post(url,params);
    }
}
export default UserAPI;