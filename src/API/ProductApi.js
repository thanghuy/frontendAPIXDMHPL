import axiosClient from './axiosClient';

const ProductAPI ={
    getProduct : (params) =>{
        const url = "/products?";
        return axiosClient.get(url,{params});
    },
    getDetail : (id) =>{
        const url = "/products/"+id;
        return axiosClient.get(url);
    }
}
export default ProductAPI;