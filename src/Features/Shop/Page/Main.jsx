import React, { Fragment, useEffect, useState } from 'react';
import ListProduct from '../Component/ListProduct';
import ProductAPI from '../../../API/ProductApi';
import Breadcrumb from '../../../Component/Breadcrumd';
const Main = (props) => {
    const [fillter,setFillter] = useState({
        idCatalog : props.id,
        page : 1
    });
    const [totalPage,settotalPage] = useState(0);
    const [productList,setProductList] = useState([]);
    const handlePage = (page)=>{
        setFillter({
            ...fillter,
            idCatalog : props.id,
            page : page
        })
        
    }
    useEffect(()=>{
        const fetchProduct = async () =>{
            try {
                const response = await ProductAPI.getProduct(fillter);
                setProductList(response.data);   
                settotalPage(response.totalPage);
                window.scrollTo(0, 0);
                
            } catch (error) {
                
            }
        }
        fetchProduct();
    },[fillter])
    return (
        <Fragment>
            <Breadcrumb url={props.url} name={props.name} />
            <ListProduct productList={productList} handlePage={handlePage} totalPage={totalPage}/>
        </Fragment>
    );
};

export default Main;