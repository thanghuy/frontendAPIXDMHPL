import Breadcrumb from '../../../Component/Breadcrumd';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../action';
import Format from '../../Handle/Format';
import Check from '../../Handle/Check';
import CartAPI from '../../../API/CartApi';
import { Button } from 'reactstrap';

const IMAGE_URL = "https://localhost:5001/image/";
const Cart = (props) => {
    const cartList = props.cartList;
    const [cartListCl,setCartList] = useState(cartList)
    const Total = useSelector(state => state.Cart.Total);
    //const [amount,setAmount] = useState(0);
    const dispatch = useDispatch();
    const idUser = Check.getIdUser();
    const handleChange = (event,idCart) =>{
        var amount = event.target.value;
        if(parseInt(amount) < 1){
            deleteCart(idCart);
        }
        else{
            //console.log(amount,idCart)
            updateCartCL(amount,idCart); 
        }
    }
    const updateCartCL = async (amount,idCart) => {
        var data = {
            "IdCustomer" : parseInt(idUser),
            "Amount" : parseInt(amount)
        }
        if(Check.CheckLogin()){
            await CartAPI.updateCartItem(data,idCart);
            const resp = await CartAPI.getCart(parseInt(idUser));
            setCartList(resp.data);
            const action = updateCart(resp.data);
            dispatch(action);
        }
    }
    const deleteCart = async (idCart) =>{
        await CartAPI.deleteCartItem(idCart,idUser);
        const resp = await CartAPI.getCart(parseInt(idUser));
        setCartList(resp.data);
        const action = updateCart(resp.data);
        dispatch(action);
    }
    const result = cartListCl.map((item,index) =>{
        return (
            <tr key={index}>
                <td className="li-product-remove"><Button onClick={()=>deleteCart(item.idCart)}><i className="fa fa-times" /></Button></td>
                <td className="li-product-thumbnail">
                    <Link to={`/products/${item.name}/${item.id}`}>
                        <img src={IMAGE_URL+item.image} alt="Li's Product Imagea" width="80px"/>
                    </Link>
                </td>
                <td className="li-product-name">
                    <Link to={`/products/${item.name}/${item.id}`}>{item.name}</Link>
                </td>
                <td className="li-product-price"><span className="amount">{Format.FormatPrice(item.price_item)}</span></td>
                <td className="quantity">
                    <div className="cart-plus-minus">
                    <input 
                        className="cart-plus-minus-box" 
                        type="number"
                        defaultValue={item.amount}  
                        onChange={(e)=>handleChange(e,item.idCart)}
                        />
                    </div>
                </td>
                <td className="product-subtotal"><span className="amount">{Format.FormatPrice(item.price)}</span></td>
            </tr>
        )
    })
    return (
        <Fragment>
            <Breadcrumb url="/cart" name="Giỏ hàng" />
            <div className="Shopping-cart-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <form action="#">
                        <div className="table-content table-responsive">
                            <table className="table">
                            <thead>
                                <tr>
                                <th className="li-product-remove">Xóa</th>
                                <th className="li-product-thumbnail">Hình ảnh</th>
                                <th className="cart-product-name">Tên</th>
                                <th className="li-product-price">Giá</th>
                                <th className="li-product-quantity">Số lượng</th>
                                <th className="li-product-subtotal">Tồng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result}
                            </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-md-5 ml-auto">
                            <div className="cart-page-total">
                                <h2>Tổng tiền</h2>
                                <ul>
                                <li>Thành tiền <span>{Format.FormatPrice(Total)}</span></li>
                                <li>Tổng <span>{Format.FormatPrice(Total)}</span></li>
                                </ul>
                                <Link to="/checkout">Thanh toán</Link>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    );
};

export default Cart;