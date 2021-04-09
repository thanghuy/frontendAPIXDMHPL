import React, { Fragment, useEffect, useState } from 'react';
import OrderAPI from '../../../API/OrderApi';
import Breadcrumd from '../../../Component/Breadcrumd';
import Check from '../../Handle/Check';
import OrderView from '../Component/ViewOrder';
const OrderUser = () => {
    const [listOrder,setListOrder] = useState([]);
    useEffect(()=>{
        const fetchListOrder = async () =>{
            const resp = await OrderAPI.getAllOrder(Check.getIdUser());
            setListOrder(resp.data);
        }
        fetchListOrder();
    },[]);
    return (
        <Fragment>
            <Breadcrumd name="danh sách đơn hàng" />
            <OrderView listOrder={listOrder} />
        </Fragment>
    );
};

export default OrderUser;