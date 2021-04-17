import React, { Fragment,useEffect, useState} from 'react';
import Breadcrumd from '../../../Component/Breadcrumd';
import { useRouteMatch } from 'react-router-dom';
import QRCode from 'qrcode.react';
import OrderAPI from '../../../API/OrderApi';
import Format from '../../Handle/Format';

const style = {
    textAlign : "center"
}
const ChoiceQr = () => {
    const match = useRouteMatch();
    const idOrder = match.params.idInvoice;
    const [detailInvoices,setDetailInvoices] = useState({});
    const [emvoStr,setEmvoQR] = useState('');
    useEffect(()=>{
        const fetchInvoice = async ()=>{
            try {
                const resp = await OrderAPI.getOneOrder(idOrder);
                setDetailInvoices(resp);
                handleStrQr(resp.totalMoney,resp.id);
            } catch (error) {
                console.log(error)
            }
        }
        fetchInvoice();
    },[idOrder]);
    const contentQrAPI = "https://localhost:5001/api/invoicesOne/"+idOrder;
    const handleStrQr =(totalMoney,id)=>{
        var lengthMoney = totalMoney.toString().length;
        if(lengthMoney < 10){
            lengthMoney = '0'+lengthMoney;
        }
        var emvoStrs = '000201'
        +'010212'
        +'0216'
        +'4242424242424242'
        +'2930'
        +'0012D15600000000'
        +'0510A93FO3230Q'
        +'5303704'
        +'54'+lengthMoney+totalMoney
        +'5802VN'
        +'5916'
        +'Nguyen Huy Thang'
        +'6014'
        +'Tp.Ho Chi Minh'
        +'6204'
        +'03'+id
        +'6304A13A'
        setEmvoQR(emvoStrs);
    }
    return (
        <Fragment>
            <Breadcrumd name="Thanh toán"/>
            <div className="checkout-area pt-60 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="your-order" style={{marginBottom : '20px'}}>
                                <h3 style={style}>Thông tin thanh toán</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <b>Nhà cung cấp : </b>Nguyễn Huy Thắng
                                            </li>
                                            <li className="list-group-item">
                                                <b>Thông tin : </b>0968798351
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <b>Mã đơn hàng : </b>{idOrder}
                                            </li>
                                            <li className="list-group-item">
                                                <b>Số tiền : </b>{Format.FormatPrice(detailInvoices.totalMoney)}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="your-order">
                                <h3 style={style}>Mã QR Chuẩn EMVo</h3>
                                <div className="payment-method">
                                    <div className="payment-accordion" style={style}>
                                        {emvoStr === '' 
                                            ? null 
                                            : <QRCode value={emvoStr} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="your-order">
                                <h3 style={style}>Mã QR GET API</h3>
                                <div className="payment-method">
                                    <div className="payment-accordion" style={style}>
                                        <QRCode value={contentQrAPI} />
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

export default ChoiceQr;