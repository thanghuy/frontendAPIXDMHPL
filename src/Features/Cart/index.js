import React, { useEffect, useState } from 'react';
import Cart from './Component/Cart';
import CartAPI from '../../API/CartApi';
import { Route,Switch, useRouteMatch } from "react-router-dom";
import Check from '../Handle/Check';
const Index = () => {
    const match = useRouteMatch();
    const [cartList, setCartList] = useState([]);
    useEffect(()=>{
        const fetchCart = async () =>{
            try {
                var response = await CartAPI.getCart(Check.getIdUser());
                setCartList(response.data)   
            } catch (error) {
                console.log("get faild");
            }
        }
        fetchCart();
    },[])
    return (
        <Switch>
            <Route exact path={match.url} component={() => <Cart cartList={cartList} />}/>
        </Switch>
    );
};

export default Index;