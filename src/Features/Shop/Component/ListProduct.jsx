import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { updateCart } from '../../Cart/action';
import Cart from '../../Handle/AddToCart';
import Check from '../../Handle/Check';
import Format from '../../Handle/Format';
import {Button} from 'reactstrap';
import DialogIsLogin from '../../../Component/Dialog';
import Snackbar from '../../../Component/Snackbar';
const URL_IMAGE = "https://localhost:5001/image/";
const ListProduct = (props) => {
    const dispatch = useDispatch();
    const productList = props.productList;
    const [isLogin,setIsLogin] = useState(false);
    const [isAlert,setIsAlert] = useState(false);
    const addToCart = async (IdProduct) =>{
        if(!Check.CheckLogin()){
            setIsLogin(true);
        }
        else{
            var data = {
                "CustomerId" : parseInt(Check.getIdUser()),
                "ProductId" : IdProduct,
                "Amount" : 1
            }
            await Cart.addCart(data);
            const response = await Cart.getCart(parseInt(Check.getIdUser()));
            const action = updateCart(response.data);
            dispatch(action);
            setIsAlert(true);
        }
        
    }
    const CallBack = () => {
        setIsLogin(false);
        setIsAlert(false);
    }
    const renderProduct = productList.map((item,index)=>{
        return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mt-10">
                {isLogin ? 
                    <DialogIsLogin
                        Content="Bạn cần đăng nhập trước khi thêm sản phẩm vào giỏ hàng"
                        TitleButton="Đi đến đăng nhập" 
                        CallBack={CallBack}
                    />
                : null}
                {isAlert ? 
                    <Snackbar
                        CallBack={CallBack}
                    />
                : null}
                {/* single-product-wrap start */}
                <div className="single-product-wrap">
                <div className="product-image" style={{padding : "20px"}}>
                    <Link to={`/products/${item.name}/${item.id}`}>
                        <img src={URL_IMAGE+item.image} alt="Li" />
                    </Link>
                    <span className="sticker">New</span>
                </div>
                <div className="product_desc">
                    <div className="product_desc_info">
                     <h4><Link className="product_name" to={`/products/${item.name}/${item.id}`}>{item.name}</Link></h4>
                    <div className="price-box">
                        <span className="new-price new-price-2">{Format.FormatPrice(item.price)}</span>
                    </div>
                    </div>
                    <div className="add-actions">
                    <ul className="add-actions-link">
                        <li className="add-cart active">
                            <span onClick={() => addToCart(item.id)}>Thêm giỏ hàng</span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* single-product-wrap end */}
            </div>
        );
    })
    const totalPage = props.totalPage;

    const changePage = (page)=>{
        props.handlePage(page);
    }
    var indents = [];
    for (var i = 1; i <= totalPage; i++) {
        indents.push(i);
    }
    const demo = indents.map((item,i)=>{
        return (
            <li className="active" key={i}><Button onClick={()=>changePage(i+1)} >{i+1}</Button></li>
        )
    })
    return (
        <div className="content-wraper pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* shop-products-wrapper start */}
                        <div className="shop-products-wrapper">
                            <div className="tab-content">
                                <div id="grid-view" className="tab-pane fade active show" role="tabpanel">
                                <div className="product-area shop-product-area">
                                    <div className="row">
                                        {renderProduct}
                                    </div>
                                </div>
                                </div>
                                <div className="paginatoin-area">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <p>Showing 1-12 of 13 item(s)</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <ul className="pagination-box">
                                                <li>
                                                    <a href="/" className="Previous"><i className="fa fa-chevron-left" /> Previous</a>
                                                </li>
                                                {demo}
                                                <li>
                                                    <a href="/" className="Next"> Next <i className="fa fa-chevron-right" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* shop-products-wrapper end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProduct;