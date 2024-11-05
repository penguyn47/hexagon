import React from 'react';

const ExploreArea = () => {
    return (
        <section className="section" id="explore">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <h2>Explore Our Products</h2>
                            <span>
                                We offer high-quality fashion products for all ages and styles.
                                Feel free to customize and develop your ideas with our unique design templates.
                            </span>
                            <div className="quote">
                                <i className="fa fa-quote-left"></i>
                                <p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                            </div>
                            <p>
                                Our product collection includes multiple pages and is provided to you completely free of charge.
                                Explore your options and find the style that suits you best.
                            </p>
                            <div className="main-border-button">
                                <a href="products.html">Discover More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="leather">
                                        <h4>Leather Bags</h4>
                                        <span>Latest Collection</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="first-image">
                                        <img src="./src/assets/images/explore-image-01.jpg" alt="Leather Bags" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="second-image">
                                        <img src="./src/assets/images/explore-image-02.jpg" alt="Product Collection" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="types">
                                        <h4>Different Types</h4>
                                        <span>Over 304 Products to Explore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreArea;
