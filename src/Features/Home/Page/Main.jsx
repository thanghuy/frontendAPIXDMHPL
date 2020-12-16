import React, { Fragment, useEffect, useState } from 'react';
import ProductAPI from '../../../API/ProductApi';
import Banner from '../Component/Banner';
import ListProduct from '../../Shop/Component/ListProduct';
const Main = () => {
    const [listProduct,setListProduct] = useState([]);

    useEffect(()=>{
        const fetchProudct = async () =>{
            try {
                var params = {
                    orderBy : "DEC"
                }
                const resp = await ProductAPI.getProduct(params);
                setListProduct(resp.data);
            } catch (error) {
                
            }
        }
        fetchProudct();
    },[])
    return (
        <Fragment>
            <Banner />
            <ListProduct productList={listProduct} />
        </Fragment>
    );
};

export default Main;