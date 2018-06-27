import React, {Component} from 'react';
import {connect} from 'react-redux';

class EventsPage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="wrap banner_bottom">
                <h3 className="tittle-w3ls">All Events</h3>
                <div className="about container">
                    <div className="bloder-content">
                        <div className="bloger-grid">
                            <div className="blog-img">
                                <img src="http://rozendal.co.za/wordpress2/wp-content/uploads/2017/03/hiking-trail.jpg" title="img6"/>
                            </div>
                            <div className="bloger-content">
                                <h5><a href="single.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></h5>
                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum."</p>
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">: 23-02-1989</a></li>
                                    <li><a href="single.html"><span>Readmore</span></a></li>
                                </ul>
                            </div>
                            <className class="clear"></className>
                        </div>
                        <div className="clear"></div>
                        <div className="bloger-grid">
                            <div className="blog-img">
                                <img src="https://lh3.googleusercontent.com/VX5SLVOxNEsROPRPpMzsWDKADLH4jKpsIYBLjZSr6SCdIHUSSnTfbs-SsbJxDsTValE=h900" title="img6"/>
                            </div>
                            <div className="bloger-content">
                                <h5><a href="single.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></h5>
                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum."</p>
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">: 23-02-1989</a></li>
                                    <li><a href="single.html"><span>Read more</span></a></li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="bloger-grid">
                            <div className="blog-img">
                                <img src="https://efese.eu/wp-content/uploads/2016/01/meeting-1-e1454592025383.jpg" title="img6"/>
                            </div>
                            <div className="bloger-content">
                                <h5><a href="single.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></h5>
                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum."</p>
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">: 23-02-1989</a></li>
                                    <li><a href="single.html"><span>Read more</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bloger-grid">
                            <div className="blog-img">
                                <img src="https://veterinarypage.vetmed.ufl.edu/files/2011/12/One-Health-Lyme_JSJ_IMG_8904.jpg" title="img6"/>
                            </div>
                            <div className="bloger-content">
                                <h5><a href="single.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></h5>
                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum."</p>
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">: 23-02-1989</a></li>
                                    <li><a href="single.html"><span>Read more</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <ul className="dc_pagination dc_paginationA dc_paginationA03">
                        <li><a href="#" className="first">First</a></li>
                        <li><a href="#" className="previous">Previous</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#" className="current">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#" className="next">Next</a></li>
                        <li><a href="#" className="last">Last</a></li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    return {
        user: state.user,
    };
}

function mapDispatch(dispatch) {
    return{
    };
}

export default connect(mapState, mapDispatch)(EventsPage);