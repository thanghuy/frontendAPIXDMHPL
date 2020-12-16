import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateCart } from '../../Cart/action';
import Check from '../../Handle/Check';

const Logout = (props) => {
    const history = useHistory();
    const Logout = () =>{
        const dispatch = useDispatch();
        const action = updateCart([]);
        dispatch(action);
        Check.Logout();
        history.push("/");
    }
    return (
        <Fragment>
            {Logout()}
        </Fragment>
    );
};

export default Logout;