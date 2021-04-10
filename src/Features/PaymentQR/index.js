import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Check from '../Handle/Check';
import PaymentQr from './Component/ChoiceQr';
const Index = () => {
    const match = useRouteMatch();
    if(Check.CheckLogin()){
        return (
            <Switch>
                <Route path={`${match.url}/qr/:idInvoice`} component={PaymentQr}/>
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