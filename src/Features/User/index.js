import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Check from '../Handle/Check';
import Detail from './Page/Detail';
import User from './Page/LoginRegister';
import Logout from './Page/Logout';
import ManagerUser from './Page/ManagerUser';
import Order from './Page/OrderUser';

const Index = () => {
    const match = useRouteMatch();
    if(Check.CheckLogin()){
        return (
            <Switch>
                <Route path={`${match.url}/logout`} component={Logout}/>
                <Route path={`${match.url}/order/:idorder`} component={Detail}/>
                <Route path={`${match.url}/order`} component={Order}/>
                <Route path={`${match.url}/manager/:iduser`} component={ManagerUser}/>
            </Switch>
        );
    }
    else{
        return (
            <Switch>
                <Route path={`${match.url}/login-register`} component={User}/>
                <Route path={`${match.url}/order/:idorder`} component={Detail}/>
            </Switch>
        );
    }
    
};

export default Index;