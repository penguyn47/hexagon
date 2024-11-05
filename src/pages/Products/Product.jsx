import React from 'react';

const Product = ({ image, title, price, rating, link }) => {
    return (
        <div className="col-lg-4">
            <div className="item">
                <div className="thumb">
                    <div className="hover-content">
                        <ul>
                            <li><a href={link}><i className="fa fa-eye"></i></a></li>
                            <li><a href={link}><i className="fa fa-star"></i></a></li>
                            <li><a href={link}><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <img src={image} alt={title} />
                </div>
                <div className="down-content">
                    <h4>{title}</h4>
                    <span>{price}</span>
                    <ul className="stars">
                        {Array.from({ length: rating }, (_, index) => (
                            <li key={index}><i className="fa fa-star"></i></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;
