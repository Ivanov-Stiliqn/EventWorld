import React from 'react';
import {Link} from 'react-router-dom';

export default function render() {
    return(
        <div className="banner_bottom">
            <div className="container">
                <div className="error-404">
                    <h4>404</h4>
                    <p>Oops ! Nothing to See here.</p>
                    <form action="#" method="post">
                        <input className="serch" type="search" name="serch" placeholder="Search here" required=""/>
                            <button className="btn1"><i className="fa fa-search" aria-hidden="true"></i></button>
                            <div className="clearfix"> </div>
                    </form>
                    <Link className="b-home" to="/">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}