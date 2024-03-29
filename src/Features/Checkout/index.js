import React from 'react';
import { Route,Redirect, Switch, useRouteMatch } from 'react-router-dom';
import FormCheckout from './Componnet/FormCheckout';
import Check from '../Handle/Check';
const Index = () => {
    const match = useRouteMatch();
    //const params = match.params;
    if(Check.CheckLogin())
    {
        return (
            <Switch>
                <Route path={match.url} component={FormCheckout}/>
            </Switch>
        );
    }
    else
    {
        alert("Bạn chưa đăng nhập");
        return (
            <Redirect to="/"/>
        );
    }
};

export default Index;