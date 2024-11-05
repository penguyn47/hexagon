import React from 'react';

const SubscribeArea = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
    };

    return (
        <div className="subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading">
                            <h2>Subscribe to Our Newsletter for 30% Off</h2>
                            <span>Stay updated with our latest offers and news.</span>
                        </div>
                        <form id="subscribe" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-5">
                                    <fieldset>
                                        <input
                                            name="name"
                                            type="text"
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-5">
                                    <fieldset>
                                        <input
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="Your Email Address"
                                            required
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-2">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="main-dark-button">
                                            <i className="fa fa-paper-plane"></i>
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>
                                        Store Location:<br />
                                        <span>Sunny Isles Beach, FL 33160, United States</span>
                                    </li>
                                    <li>
                                        Phone:<br />
                                        <span>010-020-0340</span>
                                    </li>
                                    <li>
                                        Office Location:<br />
                                        <span>North Miami Beach</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>
                                        Work Hours:<br />
                                        <span>07:30 AM - 9:30 PM Daily</span>
                                    </li>
                                    <li>
                                        Email:<br />
                                        <span>info@company.com</span>
                                    </li>
                                    <li>
                                        Social Media:<br />
                                        <span>
                                            <a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">LinkedIn</a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeArea;
