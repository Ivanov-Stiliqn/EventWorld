import React, {Component} from 'react';
import Input from '../common/Input';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {loginAction, redirect} from '../../actions/authActions';
import HomePage from "../HomePage/HomePage";
import {setPage} from "../../actions/pageActions";
import {validateLogin} from '../../api/validator';
import toastr from 'toastr';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.props.setPage('Login');
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler(e) {
        e.preventDefault();
        let check = validateLogin(this.state.email, this.state.password);
        if(check !== ''){
            toastr.error(check);
            return;
        }

        this.props.login(this.state.email, this.state.password).then(() => {
            if(this.props.redirect !== ''){
                this.props.history.push(this.props.redirect);
            }

        });


    }

    render() {
        return (
            <div className="banner_bottom">
                <div className="container">
                    <div className="tittle-w3ls_head">
                        <h3 className="tittle-w3ls three">SignIn to <span>your Account </span></h3>
                    </div>
                    <div className="inner_sec_info_wthree_agile">
                        <div className="signin-form">
                            <div className="login-form-rec">
                                <form onSubmit={this.onSubmitHandler}>
                                    <Input type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.onChangeHandler}/>
                                    <Input type="password" name="password" placeholder="Password" minLength='3' value={this.state.password} onChange={this.onChangeHandler}/>
                                    <div className="tp">
                                        <input type="submit" value="Signin"/>
                                    </div>
                                </form>
                            </div>
                            <div className="login-social-grids">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                </ul>
                            </div>
                            <p><a href="signup.html"> Don't have an account?</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    return {
        redirect: state.redirect
    };
}

function mapDispatch(dispatch) {
    return {
        login: (email, password) => dispatch(loginAction(email, password)),
        setPage: (page) => dispatch(setPage(page))
    };
}

export default connect(mapState, mapDispatch)(LoginPage);