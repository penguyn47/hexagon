import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

import Loader from "../../components/Loader"

import { Cloudinary } from 'cloudinary-core';

const ProductList = () => {
    const cld = new Cloudinary({ cloud_name: import.meta.env.VITE_CLOUD_NAME });
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API_URL + "/product/all");

                setData(response.data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    return (
        <section className="section" id="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Our Latest Products</h2>
                            <span>Check out all of our products.</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {loading ? (
                        <Loader />
                    ) : (
                        data.map((product, index) => {
                            const optimizedImageUrl = cld.url(product.images[0], {
                                width: 500,
                                height: 500,
                                crop: 'auto',
                                quality: 'auto'
                            });

                            return (
                                <Product
                                    key={index}
                                    image={optimizedImageUrl}
                                    title={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    link={`/product/${product._id}`}
                                />
                            );
                        })
                    )}
                </div>
                <div className="col-lg-12">
                    <div className="pagination">
                        <ul>
                            <li><a href="#">1</a></li>
                            <li className="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">&gt;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
