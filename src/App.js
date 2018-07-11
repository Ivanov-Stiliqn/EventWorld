import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Auth from './components/HomePage/Auth';
import { connect } from 'react-redux';
import {logoutAction, seedUserAction} from './actions/authActions';
import {renderCategoriesAction} from "./actions/categoryActions";
import  './js/bootstrap.js'
import  './js/easing.js'
import  './js/script.js'
import './style/all.css'
import './style/bootstrap.css'
import './style/contact.css'
import './style/prettyPhoto.css'
import './style/font-awesome.css'
import './style/single.css'
import './style/style.css'
import './style/team.css'
import '../node_modules/toastr/build/toastr.min.css'
import {getNotificationsAction} from "./actions/notificationActions";


class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);

        this.props.renderCategories();
        this.props.seedUser().then((user) => {
            if(user._id !== undefined){
                this.props.getNotifications(user._id);
            }
        });

    }

    onLogout() {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header logout={this.onLogout} notificationsCount={this.props.notifications.length}/>
                <Auth/>
                <Footer/>
            </div>
        );
    }
}

function mapState(state) {
    return {
        user: state.user,
        notifications: state.notifications
    };
}

function mapDispatch(dispatch) {
    return {
        logout: () => dispatch(logoutAction()),
        seedUser: () => dispatch(seedUserAction()),
        renderCategories: () => dispatch(renderCategoriesAction()),
        getNotifications: (userId) => dispatch(getNotificationsAction(userId))
    };
}


export default withRouter(connect(mapState, mapDispatch)(App));