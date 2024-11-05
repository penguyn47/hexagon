import React from 'react';

const SocialArea = () => {
    return (
        <section className="section" id="social">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Connect with Us on Social Media</h2>
                            <span>Join our community and stay updated with the latest trends.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row images">
                    {[
                        { label: 'Fashion', imgSrc: './src/assets/images/instagram-01.jpg' },
                        { label: 'New Arrivals', imgSrc: './src/assets/images/instagram-02.jpg' },
                        { label: 'Brand Highlights', imgSrc: './src/assets/images/instagram-03.jpg' },
                        { label: 'Makeup Trends', imgSrc: './src/assets/images/instagram-04.jpg' },
                        { label: 'Leather Goods', imgSrc: './src/assets/images/instagram-05.jpg' },
                        { label: 'Stylish Bags', imgSrc: './src/assets/images/instagram-06.jpg' },
                    ].map((item, index) => (
                        <div className="col-2" key={index}>
                            <div className="thumb">
                                <div className="icon">
                                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <h6>{item.label}</h6>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={item.imgSrc} alt={item.label} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialArea;
