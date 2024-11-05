import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.css';
import '../assets/css/templatemo-hexashop.css';
import '../assets/css/owl-carousel.css';
import '../assets/css/lightbox.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="/" className="logo">
                                <img src="/static/images/logo.png" alt="Logo" />
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li className="scroll-to-section">
                                    <a href="/">Home</a>
                                </li>

                                <li className="scroll-to-section">
                                    <a href="/products">Products</a>
                                </li>

                                <li className="scroll-to-section">
                                    <a href="/about">About</a>
                                </li>

                                <li className="scroll-to-section">
                                    <a href="/contact">Contact</a>
                                </li>

                                <li className="submenu">
                                    <a href="#">Accounts</a>
                                    <ul>
                                        <li><a href="/login">Login</a></li>
                                        <li><a href="/register">Register</a></li>
                                    </ul>
                                </li>

                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
