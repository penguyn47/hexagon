import React from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/templatemo-hexashop.css';
import '../../assets/css/owl-carousel.css';
import '../../assets/css/lightbox.css';
import './LoginPage.css';

function LoginPage() {
    return (
        <div className="register-page" style={{ marginTop: '100px' }}>
            <div className="container">
                <h2>Login</h2>
                <form id="register-form" action="" method="post">
                    <div className="row">
                        <div className="col-lg-12 form-group">
                            <label htmlFor="username">Username:</label>
                            <fieldset>
                                <input
                                    name="username"
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    required
                                />
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
                                    required
                                />
                            </fieldset>
                        </div>

                        <div className="col-lg-12 form-group">
                            <fieldset>
                                <button type="submit" id="form-submit" className="main-dark-button">
                                    <i className="fa fa-paper-plane"></i> Login
                                </button>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
