import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import LoginPage from '../Auth/LoginPage';
import HomePage from '../HomePage/HomePage';
import Discover from '../Discover/Users';
import {connect} from 'react-redux';
import RegisterPage from "../Auth/RegisterPage";

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.user.username){
            return (
                <Switch>
                    <Route path="/discover" component={Discover}/>
                    <Route path="/profile/:id" component={HomePage}/>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            );
        }

        return (
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        );
    }
}

function mapState(state) {
    return {user: state.user};
}

export default withRouter(connect(mapState)(Auth));