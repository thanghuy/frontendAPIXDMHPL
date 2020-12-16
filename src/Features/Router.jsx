import React, { Suspense,lazy} from 'react';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
// import WebLayout from './Layout/Web';
import Notfound from '../Component/Notfound';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Sroll from '../Component/Sroll';

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
const Combo     = lazy(()=> import("./Shop/Page/Combo"));
const Search     = lazy(()=> import("./Shop/Page/Search"));

const Routers = () => {
    
    return (
        <Suspense fallback={<div >Loading...</div>}>
            <Router > 
                <Header />
                    <Sroll>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/:name.:id" component={Shop}/>
                            <Route path="/khuyen-mai/combo" component={Combo}/>
                            <Route path="/Search" component={Search}/>
                            <Route path="/products/:nameProduct/:id" component={Detail} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/user" component={User} />
                            <Route path="/checkout" component={Checkout} />
                            <Route component={Notfound} />
                        </Switch> 
                    </Sroll>
                <Footer />
            </Router>
        </Suspense>
    );
};

export default Routers;