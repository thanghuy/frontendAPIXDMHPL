import React from 'react';
import ImageProduct from '../../../Assets/images/product/large-size/1.jpg';
//import toast from 'toasted-notes' 
//import 'toasted-notes/src/styles.css';


                
const Newproduct = () => {
    return (
        <div className="content-wraper pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="li-section-title">
                        <h2>
                            <span>Sản phẩm mới</span>
                        </h2>
                    </div>
                        {/* shop-products-wrapper start */}
                        <div className="shop-products-wrapper">
                            <div className="tab-content">
                                <div id="grid-view" className="tab-pane fade active show" role="tabpanel">
                                <div className="product-area shop-product-area">
                                    <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-6 mt-40">
                                        {/* single-product-wrap start */}
                                        <div className="single-product-wrap">
                                        <div className="product-image">
                                            <a href="single-product.html">
                                            <img src={ImageProduct} alt="Li" />
                                            </a>
                                            <span className="sticker">New</span>
                                        </div>
                                        <div className="product_desc">
                                            <div className="product_desc_info">
                                            <div className="product-review">
                                                <h5 className="manufacturer">
                                                <a href="product-details.html">Graphic Corner</a>
                                                </h5>
                                                <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o" /></li>
                                                    <li><i className="fa fa-star-o" /></li>
                                                    <li><i className="fa fa-star-o" /></li>
                                                    <li className="no-star"><i className="fa fa-star-o" /></li>
                                                    <li className="no-star"><i className="fa fa-star-o" /></li>
                                                </ul>
                                                </div>
                                            </div>
                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                            <div className="price-box">
                                                <span className="new-price">$46.80</span>
                                            </div>
                                            </div>
                                            <div className="add-actions">
                                            <ul className="add-actions-link">
                                                <li className="add-cart active"><a href="shopping-cart.html">Add to cart</a></li>
                                                <li><a href="/" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                        {/* single-product-wrap end */}
                                    </div>
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
                                        <li><a href="/" className="Previous"><i className="fa fa-chevron-left" /> Previous</a>
                                        </li>
                                        <li className="active"><a href="/">1</a></li>
                                        <li><a href="/">2</a></li>
                                        <li><a href="/">3</a></li>
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

export default Newproduct;