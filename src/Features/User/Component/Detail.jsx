import React from 'react';
import { Link } from 'react-router-dom';
import Format from '../../Handle/Format';

const Detail = (props) => {
    const order = props.order;
    const listDetailOrder = props.listDetailOrder;
    const URL_IMAGE = "https://localhost:5001/image/";
    const result = listDetailOrder.map((item,index)=>{
        return (
            <tr key={index}>
                <td className="li-product-remove">
                    <Link to={`/products/${item.nameProduct}/${item.id}`}>
                        {item.nameProduct}
                    </Link>
                </td>
                <td className="li-product-name">
                    {item.id}
                    <Link to={`/products/${item.nameProduct}/${item.id}`}>
                        <img src={URL_IMAGE+item.imageProduct} alt="Li's Product Imagea" width="80px"/>
                    </Link>
                </td>
                <td className="li-product-price">{item.amount}</td>
                <td className="quantity"><h5>{Format.FormatPrice(item.price)}</h5></td>
            </tr>
        );
    })
    return (
        <div className="Shopping-cart-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="li-product-remove">Tên sản phẩm</th>
                                        <th className="li-product-thumbnail">Hình ảnh</th>
                                        <th className="cart-product-name">Số lượng</th>
                                        <th className="li-product-quantity">Thành tiền</th>
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
                                <ul>
                                    <li>Tên<span>{order.name}</span></li>
                                    <li>Địa chỉ<span>{order.customerAddress}</span></li>
                                    <li>Số điện thoại<span>{order.phone}</span></li>
                                    <li>Ngày tạo<span>{order.createAt}</span></li>
                                    <li>Tổng<span>{Format.FormatPrice(order.totalMoney)}</span></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Detail;