import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Main from './Page/Main';
import Search from './Page/Search';

const Index = () => {
    const match = useRouteMatch();
    const params = match.params;
    return (
        <Switch>
            <Route path={`${match.url}`} component={()=> <Main url={match.url} name={params.name} id={params.id}/>}/>
            <Route path="/search" component={Search}/>
        </Switch>
    );
};

export default Index;