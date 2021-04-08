import React, { useEffect, useState } from 'react';
import Logo from '../Assets/images/menu/logo/1.jpg';
import {Link, useHistory} from 'react-router-dom';
import CatalogAPI from '../API/CatalogApi';
import {useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import Check from '../Features/Handle/Check';
import CartAPI from '../API/CartApi';
import { updateCart } from '../Features/Cart/action';
import Format from '../Features/Handle/Format';
import { saveUser } from '../Features/User/Action';
const Header = (props) => {
    const history = useHistory();
    const [catalogList, setCatalogList] = useState([]);
    const [key,setKey] = useState("");
    const isLogin = useSelector(state => state.User.isLogin);
    const Cart  = useSelector(state => state.Cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchCatalogList = async ()=>{
            try {
                const response = await CatalogAPI.getAll();
                setCatalogList(response.data);
            } catch (error) {
                console.log("connect faild")
            }
        }
        const fetchCart = async () => {
            try {
                const response = await CartAPI.getCart(Check.getIdUser());
                const action = updateCart(response.data);
                dispatch(action);
            } catch (error) {
                console.log("connect faild")
            }   
        }
        fetchCatalogList();
        if(Check.CheckLogin()){
            fetchCart();
        }
    },[dispatch])
    const listCatalog = catalogList.map((item,index)=>{
        return (
                <li key={index}><Link to={`/${item.nameCatalog}.${item.id}`}>{item.nameCatalog}</Link></li>
        );
    })
    const Logout = () =>{
        var data= {
            user : {},
            isLogin : false
        }
        const actions = updateCart([]);
        const actionss = saveUser(data);
        dispatch(actionss);
        dispatch(actions);
        Check.Logout();
        history.push("/");
    }
    var result = isLogin || Check.CheckLogin() ? 
        <Fragment>
            <li><Link to="/user/order">Xem đơn hàng</Link></li>
            <li><Link to="/user/1">{Check.getUserName()}</Link></li>
            <li><span style={{fontSize : "14px",cursor : 'pointer'}} onClick={Logout}>Đăng xuất</span></li>
        </Fragment> :
        <li><Link to="/user/login-register">Đăng nhập</Link></li>;
    const handleSearch =(e)=>{
        e.preventDefault();
        history.push("/search?key="+key);
    }
    const onChangeKey = e =>{
        var key = e.target.value;
        setKey(key);
    }
    return (
        <header className="li-header-4">
            {/* Begin Header Top Area */}
            <div className="header-top">
                <div className="container">
                <div className="row">
                    {/* Begin Header Top Left Area */}
                    <div className="col-lg-3 col-md-4">
                    <div className="header-top-left">
                        <ul className="phone-wrap">
                        <li><span>Telephone Enquiry:</span><a href="/">(+123) 123 321 345</a></li>
                        </ul>
                    </div>
                    </div>
                    {/* Header Top Left Area End Here */}
                    {/* Begin Header Top Right Area */}
                    <div className="col-lg-9 col-md-8">
                    <div className="header-top-right">
                        <ul className="ht-menu">
                        {/* Begin Setting Area */}
                            {result}
                        </ul>
                    </div>
                    </div>
                    {/* Header Top Right Area End Here */}
                </div>
                </div>
            </div>
            {/* Header Top Area End Here */}
            {/* Begin Header Middle Area */}
            <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                <div className="container">
                <div className="row">
                    {/* Begin Header Logo Area */}
                    <div className="col-lg-3">
                    <div className="logo pb-sm-30 pb-xs-30">
                        <Link to="/">
                        <img src={Logo} alt="1" />
                        </Link>
                    </div>
                    </div>
                    <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                        <form onSubmit={handleSearch} className="hm-searchbox">
                            <input 
                                name="key" 
                                type="text" 
                                placeholder="Nhập tên sản phẩm ..."
                                onChange={onChangeKey}
                            />
                            <button className="li-btn" type="submit"><i className="fa fa-search" /></button>
                        </form>
                    <div className="header-middle-right">
                        <ul className="hm-menu">
                        <li className="hm-minicart">
                            <Link to="/cart">
                                <div className="hm-minicart-trigger">
                                    <span className="item-icon" />
                                    <span className="item-text"> {Format.FormatPrice(Cart.Total)}
                                        <span className="cart-item-count">{Cart.Amount}</span>
                                    </span>
                                </div>
                            </Link>
                            <span />
                            <div className="minicart">
                                <p className="minicart-total">SUBTOTAL: <span>80.00VNĐ</span></p>
                                <div className="minicart-button">
                                    <a href="shopping-cart.html" className="li-button li-button-fullwidth li-button-dark">
                                    <span>View Full Cart</span>
                                    </a>
                                    <a href="checkout.html" className="li-button li-button-fullwidth">
                                    <span>Checkout</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* Header Mini Cart Area End Here */}
                        </ul>
                    </div>
                    {/* Header Middle Right Area End Here */}
                    </div>
                    {/* Header Middle Right Area End Here */}
                </div>
                </div>
            </div>
            {/* Header Middle Area End Here */}
            {/* Begin Header Bottom Area */}
            <div className="header-bottom mb-0 header-sticky stick d-none d-lg-block d-xl-block">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    {/* Begin Header Bottom Menu Area */}
                    <div className="hb-menu">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                {listCatalog}
                            </ul>
                        </nav>
                    </div>
                    {/* Header Bottom Menu Area End Here */}
                    </div>
                </div>
                </div>
            </div>
            {/* Header Bottom Area End Here */}
        </header>

    );
};

export default Header;