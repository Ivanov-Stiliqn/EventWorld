import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import HomeBanner from './HomeBanner';
import Banner from './Bannner';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {logout, user, currentPage} = this.props;
        return (
            <div>
                <div className="top_header" id="home">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="nav_top_fx_w3ls_agileinfo">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#navbar" aria-expanded="false"
                                        aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="logo-w3layouts-agileits">
                                    <h1><a className="navbar-brand" href="index.html"><i className="fa fa-clone"
                                                                                         aria-hidden="true"></i> Event World <span
                                        className="desc">Make your day awesome</span></a></h1>
                                </div>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <div className="nav_right_top">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a className="request" href="contact.html">Send Request</a></li>
                                    </ul>
                                    <ul className="nav navbar-nav">
                                        <li className={currentPage === 'Home' ? 'active' : null}><Link to='/'>Home</Link></li>
                                        {user.username && <li className={currentPage === 'Profile' ? 'active' : null}><Link to='/profile'>Profile</Link></li>}
                                        {user.username && <li className={currentPage === 'Add_Category' ? 'active' : null}><Link to='/add-category'>Add Category</Link></li>}
                                        {user.username && <li className={currentPage === 'Add_Event' ? 'active' : null}><Link to='/add-event'>Add Event</Link></li>}
                                        {!user.username && <li className={currentPage === 'Login' ? 'active' : null}><Link to='/login'>Login</Link></li>}
                                        {!user.username && <li className={currentPage === 'Register' ? 'active' : null}><Link to='/register'>Register</Link></li>}
                                        {user.username !== undefined ?
                                            <li><a href="javascript:void(0)" onClick={logout}>Logout</a></li> :
                                            null
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {this.props.currentPage === 'Home' ?
                <HomeBanner/> :
                <Banner />}
            </div>
        );
    }
}

function mapState(state) {
    return {
        currentPage: state.page,
        user: state.user
    };
}

export default connect(mapState)(Header);