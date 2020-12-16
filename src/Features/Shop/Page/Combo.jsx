import React, { Fragment, useEffect, useState } from 'react';
import ListProduct from '../Component/ListProduct';
import ProductAPI from '../../../API/ProductApi';
import Breadcrumb from '../../../Component/Breadcrumd';
const Accessories = () => {
    const [listProduct,setListProduct] = useState([]);
    const [total,setTotal] = useState(0);
    const [fillter,setFillter] = useState({
        combo : true,
        page : 1
    })
    useEffect(()=>{
        const fetchProudct = async () =>{
            try {
                var params = {
                    combo : "true"
                }
                const resp = await ProductAPI.getProduct(params);
                setListProduct(resp.data);
                setTotal(resp.totalPage);
                window.scrollTo(0, 0);
            } catch (error) {
                
            }
        }
        fetchProudct();
    },[])
    const handlePage = (page)=>{
        setFillter({
            ...fillter,
            page : page
        })
    }
    return (
        <Fragment>
            <Breadcrumb name="Combo" />
            <ListProduct productList={listProduct} handlePage={handlePage} totalPage={total}/>
        </Fragment>
    );
};

export default Accessories;