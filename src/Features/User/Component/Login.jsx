import React, { useState } from 'react';
import { useFormik } from 'formik';
import {FormFeedback,Input} from 'reactstrap';
import UserAPI from '../../../API/UserApi';
import * as Yup from "yup";
import Alert from '../../../Component/Alert';
import Check from '../../Handle/Check';
import { useDispatch } from 'react-redux';
import { saveUser } from '../Action';
import  { withRouter, useHistory} from 'react-router-dom'
import { updateCart } from '../../Cart/action';
import Cart from '../../../API/CartApi';

const Login = (props) => {
    const [isLogin, setIsLogin]= useState(false);
    const history = useHistory()
    const dispatch = useDispatch();
    const fetchLogin = async (params) =>{
        try {
            const response = await UserAPI.Login(params);
            const action = saveUser(response);
            if(!response.status){
                setIsLogin(true);
                dispatch(action);
            }
            else{
                setIsLogin(false);
                Check.isLogin(response.data.id,response.data.username);
                dispatch(action);
                history.push('/');
                const resp = await Cart.getCart(Check.getIdUser());
                const action2 = updateCart(resp.data);
                dispatch(action2);
            }
        } catch (error) {
            setIsLogin(true);
            console.log("login faild")
        }
    }
    const formik = useFormik({
        initialValues: {
            username : '',
            password : ''
        },
        onSubmit: values => {
            fetchLogin(values);

        },
        validationSchema : () => LoginSchema,
              
    })
    const LoginSchema = Yup.object().shape({
        username : Yup.string().required("Tên đăng nhập không được để trống"),
        password : Yup.string().required("Mật không được để trống")
    })
    const {errors, touched} = formik;
    const showErrors = errors.username && touched.username;
    const showErrors2 = errors.password && touched.password;
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="login-form">
            <h4 className="login-title">Đăng nhập</h4>
            {isLogin ? <Alert nameErrors="Đăng nhập thất bại" /> : null}
            <div className="row">
                <div className="col-md-12 col-12 mb-20">
                    <label>Tên đăng nhập</label>
                    <Input
                        className="mb-0" 
                        type="text" 
                        placeholder="Nhập tên đăng nhập" 
                        id="username"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        invalid={showErrors}
                    />
                    <FormFeedback>{errors.username}</FormFeedback>
                </div>
                <div className="col-12 mb-20">
                    <label>Mật khẩu</label>
                    <Input 
                        className="mb-0" 
                        type="password" 
                        placeholder="Nhập mật khẩu" 
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        invalid={showErrors2}
                    />
                    <FormFeedback>{errors.password}</FormFeedback>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="register-button mt-0">Đăng nhập</button>
                </div>
            </div>
            </div>
        </form>
    );
};

export default withRouter(Login);