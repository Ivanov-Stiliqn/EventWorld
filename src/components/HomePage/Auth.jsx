import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import LoginPage from '../Auth/LoginPage';
import HomePage from '../HomePage/HomePage';
import RegisterPage from "../Auth/RegisterPage";
import EventsPage from "../EventsPage/EventsPage";
import AddCategoryPage from "../AddCategoryPage/AddCategoryPage";
import AddEventPage from "../AddEventPage/AddEventPage";
import NotFound from "../common/NotFound";
import DetailsPage from "../DetailsPage/DetailsPage";
import EditEvent from "../EventsPage/EditEvent";

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.user.username === undefined){
            return (
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/all/:page/:category" component={EventsPage}/>
                    <Route exact path="/all/:page" component={EventsPage}/>
                    <Route exact path="/" component={HomePage}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            );
        }

        if(this.props.user.isAdmin === 'true'){
            return (
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/add-category" component={AddCategoryPage}/>
                    <Route exact path="/add-event" component={AddEventPage}/>
                    <Route exact path="/edit-event/:id" component={EditEvent}/>
                    <Route exact path="/all/:page/:category" component={EventsPage}/>
                    <Route exact path="/all/:page" component={EventsPage}/>
                    <Route exact path="/details/:id" component={DetailsPage}/>
                    <Route exact path="/" component={HomePage}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            );
        }

        return (
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/add-event" component={AddEventPage}/>
                <Route exact path="/edit-event/:id" component={EditEvent}/>
                <Route exact path="/all/:page/:category" component={EventsPage}/>
                <Route exact path="/all/:page" component={EventsPage}/>
                <Route exact path="/add-category" component={AddCategoryPage}/>
                <Route exact path="/details/:id" component={DetailsPage}/>
                <Route exact path="/" component={HomePage}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        );
    }
}

function mapState(state) {
    return {user: state.user};
}

export default withRouter(connect(mapState)(Auth));