import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import FormCheckout from './Componnet/FormCheckout';

const Index = () => {
    const match = useRouteMatch();
    //const params = match.params;
    return (
        <Switch>
            <Route path={match.url} component={FormCheckout}/>
        </Switch>
    );
};

export default Index;