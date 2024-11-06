import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/templatemo-hexashop.css';
import '../../assets/css/owl-carousel.css';
import '../../assets/css/lightbox.css';
import './RegisterPage.css';

function RegisterPage() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: async (values) => {
            const userData = {
                username: values.username,
                password: values.password,
            };

            try {
                await axios.post(import.meta.env.VITE_API_URL + '/user/register', userData);
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful.',
                    showConfirmButton: true,
                });
            } catch (error) {
                const errorMsg = "User already exists.";
                Swal.fire({
                    icon: 'error',
                    title: 'Registration failed.',
                    text: errorMsg,
                    showConfirmButton: true,
                });
            }
        },
    });

    return (
        <div className="register-page" style={{ marginTop: '100px' }}>
            <div className="container">
                <h2>Register</h2>
                <form id="register-form" onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12 form-group">
                            <label htmlFor="username">Username:</label>
                            <fieldset>
                                <input
                                    name="username"
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    {...formik.getFieldProps('username')}
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <div className="error">{formik.errors.username}</div>
                                ) : null}
                            </fieldset>
                        </div>
                        <div className="col-lg-12 form-group">
                            <label htmlFor="password">Password:</label>
                            <fieldset>
                                <input
                                    name="password"
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="error">{formik.errors.password}</div>
                                ) : null}
                            </fieldset>
                        </div>
                        <div className="col-lg-12 form-group">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <fieldset>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    {...formik.getFieldProps('confirmPassword')}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div className="error">{formik.errors.confirmPassword}</div>
                                ) : null}
                            </fieldset>
                        </div>
                        <div className="col-lg-12 form-group">
                            <fieldset>
                                <button type="submit" id="form-submit" className="main-dark-button">
                                    <i className="fa fa-paper-plane"></i> Register
                                </button>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
