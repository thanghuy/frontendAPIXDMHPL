import React from 'react';
import {Link} from 'react-router-dom';
const Breadcrumd = (props) => {
    return (
        <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-content">
                    <ul>
                        <li><Link to="/">Trang chủ</Link></li>
                        <li>{props.name}</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Breadcrumd;