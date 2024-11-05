import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/templatemo-hexashop.css';
import '../../assets/css/owl-carousel.css';
import '../../assets/css/lightbox.css';
import './RegisterPage.css';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = {
            username,
            password,
        };

        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + '/user/register', userData);

            console.log('Registration successful:', response.data);
            alert("Registration successful!");
        } catch (error) {
            if (error.response) {
                console.error('Registration failed:', error.response.data);
                alert("Registration failed: " + error.response.data.message);
            } else {
                console.error('Error during registration:', error);
                alert("Error during registration: " + error.message);
            }
        }
    };

    return (
        <div className="register-page" style={{ marginTop: '100px' }}>
            <div className="container">
                <h2>Register</h2>
                <form id="register-form" onSubmit={handleSubmit}>
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
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
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
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
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
