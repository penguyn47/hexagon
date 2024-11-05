import React, { useEffect, useState } from 'react';

const ContactUs = ({ mapUrl }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {(loading) ? (<div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>) : ("")}
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div id="map">
                                <iframe
                                    src={mapUrl}
                                    width="100%"
                                    height="400px"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Say Hello. Don't Be Shy!</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input
                                                name="name"
                                                type="text"
                                                id="name"
                                                placeholder="Your name"
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input
                                                name="email"
                                                type="email"
                                                id="email"
                                                placeholder="Your email"
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea
                                                name="message"
                                                rows="6"
                                                id="message"
                                                placeholder="Your message"
                                                required=""
                                            ></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-dark-button">
                                                <i className="fa fa-paper-plane"></i>
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
