import React from 'react';
import {Link} from 'react-router-dom';

export default function render() {
    return (
        <div>
            <div className="banner_inner_con">
            </div>
            <div className="services-breadcrumb">
                <div className="inner_breadcrumb">
                    <ul className="short">
                        <li><Link to="/">Home</Link><span>|</span></li>
                        <li>Event World</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}