import React, { Fragment, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Breadcrumd from '../../../Component/Breadcrumd';
import Details from '../Component/Detail';
import OrderAPI from '../../../API/OrderApi';
const Detail = () => {
    const match = useRouteMatch();
    const idOrder = match.params.idorder;
    const [listDetailOrder,setListDOrder] = useState([]);
    const [order,setOrder] = useState({});
    useEffect(()=>{
        const fetchDetail = async () =>{
            try {
                const resp = await OrderAPI.getDetailOrder(idOrder);
                setListDOrder(resp.data);
            } catch (error) {
                console.log(error)
            }
        }
        const fetchOneOrder = async () =>{
            try {
                const resp = await OrderAPI.getOneOrder(idOrder);
                setOrder(resp)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetail();
        fetchOneOrder();
    },[])
    return (
        <Fragment>
            <Breadcrumd name="Chi tiết hóa đơn"/>
            <Details listDetailOrder={listDetailOrder} order={order} />
        </Fragment>
    );
};

export default Detail;