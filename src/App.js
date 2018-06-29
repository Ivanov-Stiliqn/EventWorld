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


class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);

        this.props.seedUser();
        this.props.renderCategories();
    }

    onLogout() {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header logout={this.onLogout}/>
                <Auth/>
                <Footer/>
            </div>
        );
    }
}

function mapState(state) {
    return {user: state.user};
}

function mapDispatch(dispatch) {
    return {
        logout: () => dispatch(logoutAction()),
        seedUser: () => dispatch(seedUserAction()),
        renderCategories: () => dispatch(renderCategoriesAction())
    };
}


export default withRouter(connect(mapState, mapDispatch)(App));