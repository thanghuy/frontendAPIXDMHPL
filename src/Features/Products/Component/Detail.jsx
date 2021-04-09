import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import CartAPI from '../../../API/CartApi';
import Breadcrumb from '../../../Component/Breadcrumd';
import { updateCart } from '../../Cart/action';
import Check from '../../Handle/Check';
import Format from '../../Handle/Format';
import DialogIsLogin from '../../../Component/Dialog';
import Snackbar from '../../../Component/Snackbar';

const URL_IMAGE = "https://localhost:5001/image/";

const Detail = (props) => {
    const product = props.product;
    const [amount,setAmount] = useState(1);
    const [isLogin,setIsLogin] = useState(false);
    const [isAlert,setIsAlert] = useState(false);
    const dispatch = useDispatch();
    const userId = Check.getIdUser();
    const handelSL = event => {
        var amounts = event.target.value;
        if(parseInt(amounts) < 1){
            setAmount(1);
        }
        else{
            setAmount(amounts);
        }
    }
    const addCart = async ()=>{
        if(!Check.CheckLogin()){
            setIsLogin(true);
        }
        else{
            var data =  {
                "CustomerId" : parseInt(userId),
                "ProductId" : parseInt(product.id),
                "Amount" : parseInt(amount)
            }
            await CartAPI.addCart(data);
            const resp = await CartAPI.getCart(userId);
            const action = updateCart(resp.data);
            dispatch(action);
            setIsAlert(true);
        }
    }
    const CallBack = () => {
        setIsLogin(false);
        setIsAlert(false);
    }
    return (
        <Fragment>
            {isLogin ? 
                <DialogIsLogin
                    Content="Bạn cần đăng nhập trước khi thêm sản phẩm vào giỏ hàng"
                    TitleButton="Đi đến đăng nhập" 
                    CallBack={CallBack}
                />
            : <Fragment />}
            {isAlert ? 
                <Snackbar
                    CallBack={CallBack}
                />
            : <Fragment />}
            <Breadcrumb url={props.url} name={props.name} />
            <div className="content-wraper">
                <div className="container">
                    <div className="row single-product-area" style={{marginBottom : "20px"}}>
                        <div className="col-lg-5 col-md-6">
                            {/* Product Details Left */}
                            <div className="product-details-left">
                                <div className="product-details-images slider-navigation-1">
                                    <div className="lg-image">
                                    <a className="popup-img venobox vbox-item" href="images/product/large-size/1.jpg" data-gall="myGallery">
                                        <img src={URL_IMAGE + product.image} alt="product imagea" />
                                    </a>
                                    </div>
                                </div>
                            </div>
                            {/*// Product Details Left */}
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="product-details-view-content pt-60">
                                <div className="product-info">
                                    <h2>{product.name}</h2>
                                    <span className="product-details-ref">Reference: demo_15</span>
                                    <div className="rating-box pt-20">
                                        <ul className="rating rating-with-review-item">
                                            <li><i className="fa fa-star-o" /></li>
                                            <li><i className="fa fa-star-o" /></li>
                                            <li><i className="fa fa-star-o" /></li>
                                            <li className="no-star"><i className="fa fa-star-o" /></li>
                                            <li className="no-star"><i className="fa fa-star-o" /></li>
                                        </ul>
                                    </div>
                                    <div className="price-box pt-20">
                                        <span className="new-price new-price-2">{Format.FormatPrice(product.price)}</span>
                                    </div>
                                    <div className="product-desc">
                                        <p>
                                            <span>
                                                Được chế tác bằng chất liệu chủ đạo là nhôm phay xước, MSI GF63 Thin 10SCXR 1218VN là chiếc laptop gaming hiện đại được thiết kế theo xu hướng mới hiện nay: mỏng nhẹ và tinh tế. Với các chỉ số ấn tượng như trọng lượng 1.86kg và kích thước 21.7mm, bạn có thể mang theo và chơi game ở bất kỳ đâu cùng bạn bè.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="single-add-to-cart">
                                        <form action="#" className="cart-quantity">
                                            <div className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input 
                                                        className="cart-plus-minus-box" 
                                                        type="number" 
                                                        value={amount}
                                                        onChange={handelSL}
                                                        />
                                                </div>
                                            </div>
                                            <button 
                                                className="add-to-cart" 
                                                type="button"
                                                onClick={()=>addCart()}
                                            >
                                                Thêm giỏ hàng
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Detail;