import React, { Fragment, useEffect, useState } from 'react';
import ListProduct from '../Component/ListProduct';
import ProductAPI from '../../../API/ProductApi';
import Breadcrumb from '../../../Component/Breadcrumd';
const Accessories = () => {
    const [listProduct,setListProduct] = useState([]);

    useEffect(()=>{
        const fetchProudct = async () =>{
            try {
                var params = {
                    combo : "true"
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
            <Breadcrumb name="Combo" />
            <ListProduct productList={listProduct}/>
        </Fragment>
    );
};

export default Accessories;