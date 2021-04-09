import { useFormik } from 'formik';
import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumd from '../../../Component/Breadcrumd';
import * as Yup from "yup";
import {FormFeedback,Input} from 'reactstrap';
import Check from '../../Handle/Check';
import CartAPI from '../../../API/CartApi';
import { useDispatch, useSelector } from 'react-redux';
import Format from '../../Handle/Format';
import OrderAPI from '../../../API/OrderApi';
import {updateCart} from '../../Cart/action';
import { useHistory } from 'react-router-dom';

const FormCheckout = (props) => {
    const history = useHistory();
    const [cartList,setCartList] = useState([]);
    const uesrID = Check.getIdUser();
    const dispatch = useDispatch();
    const Total = useSelector(state => state.Cart.Total);
    const Amount = useSelector(state => state.Cart.Amount);
    useEffect(()=>{
        const fetchCart = async () => {
          if(Check.CheckLogin()){
            const resp = await CartAPI.getCart(parseInt(uesrID));
            setCartList(resp.data);
          }
          else{

          }
          // const action = 
        }
        fetchCart();
    },[uesrID])
    const fetchOrder = async (data) =>{
      var idC = Check.CheckLogin() ? uesrID : null; 
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var n = today.getTime();
      today = dd + '/' + mm + '/' + yyyy+ '-'+ n;
      var result = cartList.map((item,index)=>{
          return {
            "productId": item.id,
            "amount": item.amount,
            "price": item.price
          }
      })
      var datas = {
        name: data.fisrtname,
        customerId: parseInt(idC),
        idShipper: 1,
        totalMoney: parseFloat(Total),
        createAt: today,
        customerAddress: data.address,
        status: false,
        shipDate: today,
        phone: data.phone,
        email: data.email,
        order_item : result
      }
      try {
        const resp = await OrderAPI.addOrder(datas);
        for(var i = 0; i < cartList.length ; i++){
          CartAPI.deleteCartItem(cartList[i].idCart,uesrID);
        }
        const action = updateCart([]);
        dispatch(action);
        history.push("user/order/"+resp.data.id);
      } catch (error) {
        console.log("Error")
      }
    }
    const formik = useFormik({
      initialValues: {
        fisrtname : '',
        email : '',
        phone : '',
        address : '',
      },
      onSubmit: values => {
          if(parseInt(Amount) !== 0){
            fetchOrder(values);
          }
          else{
            alert("Giỏ hàng trống");
          }
      },
      validationSchema : () => CheckoutSchema,
    })
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    const CheckoutSchema = Yup.object().shape({
      fisrtname : Yup.string().required("Tên không được để trống"),
      email : Yup.string().required("Email không được để trống")
              .matches(regexEmail,"Email không hợp lệ"),
      phone : Yup.string().required("Phone không được để trống")
              .matches(regexPhone,"Số điện thoại không hợp lệ"),
      address : Yup.string().required("Địa chỉ không được để trống")
    })
    const {errors, touched} = formik;
    const showError1 = errors.fisrtname && touched.fisrtname;
    const showError3 = errors.email && touched.email;
    const showError4 = errors.phone && touched.phone;
    const showError5 = errors.address && touched.address;
    const result = cartList.map((item,index) =>{
      return(
        <tr className="cart_item" key={index}>
          <td className="cart-product-name">{item.name}<strong className="product-quantity"> × {item.amount}</strong></td>
          <td className="cart-product-total"><span className="amount">{Format.FormatPrice(item.price)}</span></td>  
        </tr>
      )
    })
    return (
      <Fragment>
        <Breadcrumd name="Thanh toán"/>
        <form onSubmit={formik.handleSubmit}>
        <div className="checkout-area pt-60 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                  <div className="checkbox-form">
                    <h3>Thông tin </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Tên<span className="required">*</span></label>
                          <Input 
                            className="mb-0" 
                            placeholder="Nhập tên"
                            type="text" 
                            id="fisrtname"
                            name="fisrtname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fisrtname}
                            invalid={showError1}
                          />
                          <FormFeedback>{errors.fisrtname}</FormFeedback>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Email *</label>
                          <Input 
                            className="mb-0" 
                            placeholder="Nhập email"
                            type="text" 
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            invalid={showError3}
                          />
                          <FormFeedback>{errors.email}</FormFeedback>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Số điện thoại *</label>
                          <Input 
                            className="mb-0" 
                            placeholder="Nhập số điện thoại"
                            type="text" 
                            id="phone"
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            invalid={showError4}
                          />
                          <FormFeedback>{errors.phone}</FormFeedback>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Địa chỉ <span className="required">*</span></label>
                          <Input 
                            className="mb-0" 
                            placeholder="Nhập địa chỉ" 
                            type="text" 
                            id="address"
                            name="address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            invalid={showError5}
                          />
                          <FormFeedback>{errors.address}</FormFeedback>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="your-order">
                  <h3>Thông tin đặt hàng</h3>
                  <div className="your-order-table table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="cart-product-name">Sản phẩm</th>
                          <th className="cart-product-total">Tổng tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Thành tiền</th>
                          <td><span className="amount">{Format.FormatPrice(Total)}</span></td>
                        </tr>
                        <tr className="order-total">
                          <th>Tổng tiền</th>
                          <td><strong><span className="amount">{Format.FormatPrice(Total)}</span></strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="payment-accordion">
                      <div className="order-button-payment">
                        <input defaultValue="Thanh toán" type="submit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </Fragment>
    );
};

export default FormCheckout;