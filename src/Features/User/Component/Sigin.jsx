import React, { useState } from 'react';
import { useFormik } from 'formik';
import {Alert, FormFeedback,Input} from 'reactstrap';
import * as Yup from "yup";
import UserAPI from '../../../API/UserApi';
const Sigin = () => {
    const [alert , setAlert] = useState(false);
    const [isSign,setIsSign] = useState(false);
    const formiks = useFormik({
        initialValues: {
            firstName: '',
            lastName : '',
            username_s : '',
            password_s : '',
            confirm_password_s : ''
        },
        onSubmit: values => {
            fetchCreateUser(values);
        },
        validationSchema : () => SiginSchema,
              
    })
    
    const fetchCreateUser = async (data) =>{
        var datas = {
            username : data.username_s,
            password : data.password_s,
            fullname : data.firstName,
            email : data.lastName
        }
        console.log(datas);
        try {
            const resp = await UserAPI.CreateUser(datas);
            setAlert(true);
            if(resp.status){
                setIsSign(true)
            }
            else{
                setIsSign(false);
            }
        } catch (error) {
            
        }
    }
    const SiginSchema = Yup.object().shape({
        username_s : Yup.string().required("Tên đăng nhập không được để trống"),
        password_s : Yup.string().required("Mật không được để trống"),
        confirm_password_s : Yup.string().required("Mật không khớp")
        .oneOf([Yup.ref('password_s'), null], 'Mật không khớp')
    })
    const {errors, touched} = formiks;
    const showErrors1 = errors.username_s && touched.username_s;
    const showErrors2 = errors.password_s && touched.password_s;
    const showErrors3 = errors.confirm_password_s && touched.confirm_password_s;
    const show = isSign ? <Alert color="primary">Đăng ký thành công mời bạn đăng nhập</Alert> :
    <Alert color="danger">Tên đăng nhập bị trùng mời bạn nhập lại</Alert>;
    return (
        <form onSubmit={formiks.handleSubmit}>
            <div className="login-form">
            <h4 className="login-title">Đăng ký</h4>
            {!alert ? null : show}
            
            <div className="row">
                <div className="col-md-6 col-12 mb-20">
                    <label>Tên</label>
                    <input 
                        className="mb-0" 
                        type="text" 
                        placeholder="Nhập tên" 
                        id="firstName"
                        name="firstName"
                        onChange={formiks.handleChange}
                        onBlur={formiks.handleBlur}
                        value={formiks.values.firstName}
                    />
                </div>
                <div className="col-md-6 col-12 mb-20">
                <label>Họ</label>
                    <input 
                        className="mb-0" 
                        type="text" 
                        placeholder="Nhập họ" 
                        id="lastName"
                        name="lastName"
                        onChange={formiks.handleChange}
                        onBlur={formiks.handleBlur}
                        value={formiks.values.lastName}
                    />
                    </div>
                <div className="col-md-12 mb-20">
                    <label>Tên đăng nhập *</label>
                    <Input
                        className="mb-0" 
                        type="text" 
                        placeholder="Nhập tên đăng nhập" 
                        id="username_s"
                        name="username_s"
                        onChange={formiks.handleChange}
                        onBlur={formiks.handleBlur}
                        value={formiks.values.username_s}
                        invalid={showErrors1}
                    />
                    <FormFeedback>{errors.username_s}</FormFeedback>
                </div>
                <div className="col-md-6 mb-20">
                    <label>Mật khẩu *</label>
                    <Input 
                        className="mb-0" 
                        type="password" 
                        placeholder="Nhập mật khẩu" 
                        id="password_s"
                        name="password_s"
                        onChange={formiks.handleChange}
                        onBlur={formiks.handleBlur}
                        value={formiks.values.password_s}
                        invalid={showErrors2}
                    />
                    <FormFeedback>{errors.password_s}</FormFeedback>
                </div>
                <div className="col-md-6 mb-20">
                    <label>Xác nhận mật khẩu</label>
                    <Input 
                        className="mb-0" 
                        type="password" 
                        placeholder="Nhập lại mật khẩu" 
                        id="confirm_password_s"
                        name="confirm_password_s"
                        onChange={formiks.handleChange}
                        onBlur={formiks.handleBlur}
                        value={formiks.values.confirm_password_s}
                        invalid={showErrors3}
                        />
                    <FormFeedback>{errors.confirm_password_s}</FormFeedback>
                </div>
                <div className="col-12">
                    <button type="submit" className="register-button mt-0">Đăng ký</button>
                </div>
            </div>
            </div>
        </form>
    );
};

export default Sigin;