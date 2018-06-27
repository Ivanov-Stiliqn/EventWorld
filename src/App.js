import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoginPage from "./components/Auth/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/Auth/RegisterPage";
import { connect } from 'react-redux';
import {logoutAction, seedUserAction} from './actions/authActions';
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
import EventsPage from "./components/EventsPage/EventsPage";
import '../node_modules/toastr/build/toastr.min.css'
import AddCategoryPage from "./components/AddCategoryPage/AddCategoryPage";
import AddEventPage from "./components/AddEventPage/AddEventPage";

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);

        this.props.seedUser();
    }

    onLogout() {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        console.log(this.props.user.username);
        return (
            <div className="App">
                <Header logout={this.onLogout}/>
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/add-category" component={AddCategoryPage}/>
                    <Route exact path="/add-event" component={AddEventPage}/>
                    <Route exact path="/all" component={EventsPage}/>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
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
        seedUser: () => dispatch(seedUserAction())
    };
}


export default withRouter(connect(mapState, mapDispatch)(App));