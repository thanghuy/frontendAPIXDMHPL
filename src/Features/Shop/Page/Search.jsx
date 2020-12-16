import React, {Fragment, useEffect, useState} from 'react';
import Breadcrumb  from '../../../Component/Breadcrumd';
import ListProduct from '../Component/ListProduct';
import ProductAPI from '../../../API/ProductApi';
import { useLocation} from 'react-router-dom';
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const Search = () => {
    const query = useQuery();
    const [fillter,setFillter] = useState({
        key : query.get("key"),
        page : 1
    })
    const [total,setTotal] = useState(0);
    const [listProduct,setListProduct] = useState([]);
    useEffect(()=>{
        const fetchProduct = async () => {
            const resp = await ProductAPI.getProduct(fillter);
            setListProduct(resp.data);
            setTotal(resp.totalPage);
            window.scrollTo(0, 0);
        }
        fetchProduct()
    },[fillter])
    useEffect(() => {
        if (query.get("key") !== fillter.key) {
            setFillter({
                ...fillter,
                key : query.get("key")
            })
        }
      },[query,fillter]);
    const handlePage = (page)=>{
        setFillter({
            ...fillter,
            page : page
        })
    }
    return (
        <Fragment>
            <Breadcrumb name="Tìm kiếm"/>
            <ListProduct productList={listProduct} handlePage={handlePage} totalPage={total}/>
        </Fragment>
    );
};

export default Search;