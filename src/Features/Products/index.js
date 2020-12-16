import React, { useState,useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Detail from './Component/Detail';
import ProductAPI from '../../API/ProductApi';

const Index = () => {
    const match = useRouteMatch();
    const params = match.params;
    const [product,setProduct] = useState({});
    useEffect(()=>{
        const fetchProduct = async () =>{
            try {
                const response = await ProductAPI.getDetail(params.id);
                setProduct(response);   
            } catch (error) {
                console.log("connect faild");
            }
        }
        fetchProduct();
    },[])
    return (
        <Switch>
            <Route exact path={match.url} component={() => <Detail url={match.url} name={params.nameProduct} product={product}/>}/>
        </Switch>
    );
};

export default Index;