import axiosClient from './axiosClient';

const CartAPI = {
    getCart : (id) =>{
        const url = "/carts/"+id;
        return axiosClient.get(url);
    },
    addCart : (data) => {
        const url = "/carts";
        return axiosClient.post(url,data);
    },
    updateCartItem : (data,idCart) => {
        const url = "/carts/"+idCart;
        return axiosClient.put(url,data);
    },
    deleteCartItem : (idCart,idUser) => {
        const url = "/carts/"+idCart+"/"+idUser;
        return axiosClient.delete(url);
    }
}
export default CartAPI;