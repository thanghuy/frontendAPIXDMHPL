import axiosClient from './axiosClient';

const UserAPI = {
    Login : (params) =>{
        const url = "/Customers/Login";
        return axiosClient.post(url,params);
    },
    CreateUser : (params) =>{
        const url = "/Customers/resigter";
        return axiosClient.post(url,params);
    }
}
export default UserAPI;