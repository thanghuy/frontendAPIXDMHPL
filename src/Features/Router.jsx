import React, { Suspense,lazy} from 'react';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import Notfound from '../Component/Notfound';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Sroll from '../Component/Sroll';

const Home      = lazy(()=> import('./Home/index'));
const Shop      = lazy(()=> import('./Shop/index'));
const Detail    = lazy(()=> import('./Products/index'));
const Cart      = lazy(()=> import('./Cart/index'));
const User      = lazy(()=> import('./User/index'));
const Checkout  = lazy(()=> import('./Checkout'));
const Search    = lazy(()=> import("./Shop/Page/Search"));
const PaymentQR    = lazy(()=> import("./PaymentQR/index"));

const Routers = () => {
    
    return (
        <Suspense fallback={<div style={{width : "100%",height : "100%", backgroundColor : "F2F2F2"}}></div>}>
            <Router > 
                <Header />
                    <Sroll>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/:name.:id" component={Shop}/>
                            <Route path="/Search" component={Search}/>
                            <Route path="/products/:nameProduct/:id" component={Detail} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/user" component={User} />
                            <Route path="/checkout" component={Checkout} />
                            <Route path="/payment" component={PaymentQR} />
                            <Route component={Notfound} />
                        </Switch> 
                    </Sroll>
                <Footer />
            </Router>
        </Suspense>
    );
};

export default Routers;