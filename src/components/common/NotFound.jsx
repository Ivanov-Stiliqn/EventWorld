import React from 'react';
import {Link} from 'react-router-dom';

export default function render() {
    return(
        <div className="banner_bottom">
            <div className="container">
                <div className="error-404">
                    <h4>404</h4>
                    <p>Oops ! Nothing to See here.</p>
                    <Link className="b-home" to="/">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}