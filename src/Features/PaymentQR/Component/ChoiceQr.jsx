import React, { Fragment } from 'react';
import Breadcrumd from '../../../Component/Breadcrumd';
import { useRouteMatch } from 'react-router-dom';
import QRCode from 'qrcode.react';

const style = {
    textAlign : "center"
}
const ChoiceQr = () => {
    const match = useRouteMatch();
    const idOrder = match.params.idInvoice;
    
    const contentQrAPI = "https://localhost:5001/api/invoicesOne/"+idOrder;
    return (
        <Fragment>
            <Breadcrumd name="Thanh toán"/>
            <div className="checkout-area pt-60 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="your-order">
                                <h3 style={style}>Mã QR Chuẩn EMVo</h3>
                                <div className="payment-method">
                                    <div className="payment-accordion" style={style}>
                                        <QRCode value="http://facebook.github.io/react/" />
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