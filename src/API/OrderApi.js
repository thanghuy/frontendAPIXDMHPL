import axiosClient from './axiosClient';

const OrderAPI = {
    getAllOrder : (id) =>{
        const url = "/invoices/all/"+id;
        return axiosClient.get(url);
    },
    getOneOrder : (id) =>{
        const url = "/invoices/"+id;
        return axiosClient.get(url);
    },
    getDetailOrder : (id) =>{
        const url = "/invoicedetails/"+id;
        return axiosClient.get(url);
    },
    addOrder : (data) => {
        const url = "/invoices";
        return axiosClient.post(url,data);
    },
    updateCartItem : (data,idCart) => {
        const url = "/invoices/"+idCart;
        return axiosClient.put(url,data);
    },
    deleteCartItem : (idCart,idUser) => {
        const url = "/invoices/"+idCart+"/"+idUser;
        return axiosClient.delete(url);
    }
}
export default OrderAPI;