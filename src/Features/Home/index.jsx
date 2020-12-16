import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Main from './Page/Main';


const Index = (props) => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={Main}/>
        </Switch>
    );
};

export default Index;