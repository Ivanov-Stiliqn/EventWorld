import React from 'react';

export default function render() {
    return(
        <div className="footer">
        <div className="footer_inner_info_w3ls_agileits">
            <div className="col-md-3 footer-left">
                <h2><a href="index.html"><i className="fa fa-clone" aria-hidden="true"></i> Conceit </a></h2>
                <p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
            </div>
            <div className="col-md-9 footer-right">
                <div className="sign-grds">
                    <div className="col-md-4 sign-gd">
                        <h4>Latest <span>Info</span> </h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="404.html">Services</a></li>
                            <li><a href="signin.html">Signin</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-5 sign-gd-two">
                        <h4>Contact <span>Information</span></h4>
                        <div className="address">
                            <div className="address-grid">
                                <div className="address-left">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="address-right">
                                    <h6>Phone Number</h6>
                                    <p>+1 234 567 8901</p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="address-grid">
                                <div className="address-left">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div className="address-right">
                                    <h6>Email Address</h6>
                                    <p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="address-grid">
                                <div className="address-left">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div className="address-right">
                                    <h6>Location</h6>
                                    <p>Broome St, NY 10002,California, USA.

                                    </p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix"></div>
            <p className="copy-right">&copy 2018 Conceit. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
        </div>
    </div>
    );
}