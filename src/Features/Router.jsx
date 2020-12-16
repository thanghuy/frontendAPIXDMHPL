import React, { Suspense,lazy} from 'react';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
// import WebLayout from './Layout/Web';
import Notfound from '../Component/Notfound';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

// const AppRouter = ({component : Component,layout : Layout,...rest}) =>{
//     return(
//         <Route {...rest} render={props=>(
//             <Layout><Component {...props}/></Layout>
//         )}>
//         </Route>
//     );
// }
const Home      = lazy(()=> import('./Home/index'));
const Shop      = lazy(()=> import('./Shop/index'));
const Detail    = lazy(()=> import('./Products/index'));
const Cart      = lazy(()=> import('./Cart/index'));
const User      = lazy(()=> import('./User/index'));
const Checkout  = lazy(()=> import('./Checkout'));

const Routers = () => {
    return (
        <Suspense fallback={<div >Loading...</div>}>
            <Router > 
                <Header />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/:name.:id" component={Shop}/>
                        <Route path="/products/:nameProduct/:id" component={Detail} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/user" component={User} />
                        <Route path="/checkout" component={Checkout} />
                        <Route component={Notfound} />
                    </Switch> 
                <Footer />
            </Router>
        </Suspense>
    );
};

export default Routers;