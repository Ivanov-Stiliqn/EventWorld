import React from 'react';
import {Link} from 'react-router-dom';

export default function render() {
    return(
        <div className="footer">
        <div className="footer_inner_info_w3ls_agileits">
            <div className="col-md-3 footer-left">
                <h2><a href="index.html"><i className="fa fa-clone" aria-hidden="true"></i> Event World </a></h2>
                <p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
            </div>
            <div className="col-md-9 footer-right">
                <div className="sign-grds">
                    <div className="col-md-4 sign-gd">
                        <h4>Latest <span>Info</span> </h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
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
            <p className="copy-right">&copy; 2018 Event World. All rights reserved | Design by <a target='_blank' href="https://github.com/Ivanov-Stiliqn">Stiliyan Ivanov</a></p>
        </div>
    </div>
    );
}