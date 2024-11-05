import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Cloudinary } from 'cloudinary-core';

const ProductDetail = () => {
    const cld = new Cloudinary({ cloud_name: import.meta.env.VITE_CLOUD_NAME });
    const { id } = useParams();
    const [data, setData] = useState({}); // Khởi tạo data là một đối tượng rỗng

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/${id}`);
                setData(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, [id]); // Thêm id vào dependency array để fetch lại khi id thay đổi


    return (
        <section className="section" id="product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="left-images">
                            {data.images && data.images.length > 0 ? (
                                data.images.map((image, index) => {
                                    const url = cld.url(image, {
                                        fetch_format: 'auto',
                                        quality: 'auto',
                                    });

                                    return (
                                        <img
                                            key={index} // Đặt key cho mỗi ảnh
                                            src={url}
                                            alt={`Product Image ${index + 1}`}
                                            style={{ width: '100%', height: 'auto', maxWidth: '30rem' }}
                                        />
                                    );
                                })
                            ) : (
                                <img
                                    src="https://placehold.co/600x400"
                                    alt="Placeholder"
                                    style={{ width: '100%', height: 'auto', maxWidth: '25rem' }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-content">
                            <h4>{data.name}</h4>
                            <span className="price">{data.price}</span>
                            <ul className="stars">
                                {[...Array(5)].map((_, index) => (
                                    <li key={index}><i className="fa fa-star"></i></li>
                                ))}
                            </ul>
                            <p>{data.description}</p>
                            <div className="quote">
                                <i className="fa fa-quote-left"></i>
                                <p>{data.quote}</p>
                            </div>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>No. of Orders</h6>
                                </div>
                                <div className="right-content">
                                    <div className="quantity buttons_added">
                                        <input type="button" value="-" className="minus" />
                                        <input
                                            type="number"
                                            step="1"
                                            min="1"
                                            name="quantity"
                                            defaultValue="1"
                                            title="Qty"
                                            className="input-text qty text"
                                            size="4"
                                        />
                                        <input type="button" value="+" className="plus" />
                                    </div>
                                </div>
                            </div>
                            <div className="total">
                                <h4>Total: $210.00</h4>
                                <div className="main-border-button"><a href="#">Add To Cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
