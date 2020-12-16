import React from 'react';
import { Link } from 'react-router-dom';
import Format from '../../Handle/Format';

const ViewOrder = (props) => {
    const listOrder = props.listOrder;
    const result = listOrder.map((item,index)=>{
        return(
            <tr key={index}>
                <td className="li-product-remove">{item.id}</td>
                <td className="li-product-thumbnail">{item.name}</td>
                <td className="li-product-name">{item.phone}</td>
                <td className="li-product-price">{item.email}</td>
                <td className="quantity">{item.customerAddress}</td>
                <td className="product-subtotal">{Format.FormatPrice(item.totalMoney)}</td>
                <td className="product-subtotal"><Link to={`/user/order/${item.id}`}>Chi tiết</Link></td>
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
                                    <th className="li-product-remove">Mã hóa đơn</th>
                                    <th className="li-product-thumbnail">Tên</th>
                                    <th className="cart-product-name">Số điện thoại</th>
                                    <th className="li-product-price">Email</th>
                                    <th className="li-product-quantity">Địa chỉ</th>
                                    <th className="li-product-subtotal">Tồng tiền</th>
                                    <th className="li-product-subtotal">Chi tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result}
                            </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default ViewOrder;