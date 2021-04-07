import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import CartAPI from '../../../API/CartApi';
import Breadcrumb from '../../../Component/Breadcrumd';
import { updateCart } from '../../Cart/action';
import Check from '../../Handle/Check';
import Format from '../../Handle/Format';
const URL_IMAGE = "https://localhost:5001/image/";

const Detail = (props) => {
    const product = props.product;
    const [amount,setAmount] = useState(1);
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
            alert("Bạn cần đăng nhập để thêm giỏ hàng")
        }
        else{
            var data =  {
                "IdCustomer" : parseInt(userId),
                "IdProduct" : parseInt(product.id),
                "Amount" : parseInt(amount)
            }
            await CartAPI.addCart(data);
            const resp = await CartAPI.getCart(userId);
            const action = updateCart(resp.data);
            dispatch(action);
            alert("Thêm giỏ hàng thành công");
        }
    }
    return (
        <Fragment>
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
                                        <img src={URL_IMAGE + product.Image} alt="product imagea" />
                                    </a>
                                    </div>
                                </div>
                            </div>
                            {/*// Product Details Left */}
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="product-details-view-content pt-60">
                                <div className="product-info">
                                    <h2>{product.Name}</h2>
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
                                        <span className="new-price new-price-2">{Format.FormatPrice(product.Price)}</span>
                                    </div>
                                    <div className="product-desc">
                                        <p>
                                            <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
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