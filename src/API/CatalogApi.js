import axiosClient from './axiosClient';

const CatalogAPI ={
    getAll : (params) =>{
        const url = "/catalogs";
        return axiosClient.get(url,{params});
    }
}
export default CatalogAPI;