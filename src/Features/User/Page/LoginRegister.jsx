import React from 'react';
import { Fragment } from 'react';
import Breadcrumd from '../../../Component/Breadcrumd';
import Login from '../Component/Login';
import Sigin from '../Component/Sigin';
const LoginRegister = () => {
    return (
        <Fragment>
            <Breadcrumd name="Đăng nhập & đăng ký"/>
            {/* Begin Login Content Area */}
            <div className="page-section mb-60">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                    {/* Login Form s*/}
                        <Login />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                        <Sigin />
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginRegister;