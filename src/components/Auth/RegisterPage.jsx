import React, {Component} from 'react';
import Input from '../common/Input';
import {connect} from 'react-redux';
import {registerAction, redirect} from '../../actions/authActions';
import {Link} from 'react-router-dom';
import {setPage} from "../../actions/pageActions";
import toastr from 'toastr'
import {validateRegister} from "../../api/validator";

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            repeat: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.props.setPage('Register');
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler(e) {
        e.preventDefault();
        let check = validateRegister(this.state.email, this.state.password, this.state.repeat, this.state.firstName, this.state.lastName);
        if(check !== ''){
            toastr.error(check);
            return;
        }

        this.props.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password).then(() => {
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
                        <h3 className="tittle-w3ls three">Sign Up <span>Now </span></h3>
                    </div>
                    <div className="inner_sec_info_wthree_agile">
                        <div className="signin-form">
                            <div className="login-form-rec">
                                <form onSubmit={this.onSubmitHandler}>
                                    <Input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeHandler}/>
                                    <Input type="text" name="lastName" placeholder="Last Name"  value={this.state.lastName} onChange={this.onChangeHandler}/>
                                    <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChangeHandler}/>
                                    <Input type="password" name="password" id="password1" minLength='3' placeholder="Password"
                                           required="" value={this.state.password} onChange={this.onChangeHandler}/>
                                    <Input type="password" name="repeat" minLength='3' id="password2"
                                           placeholder="Confirm Password" required="" value={this.state.repeat} onChange={this.onChangeHandler}/>
                                    <input type="submit" value="Sign Up"/>
                                </form>
                            </div>
                            <p className="reg"><a href="#"> By clicking Signup, I agree to your terms</a></p>

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
        register: (firstName, lastName, email, password) => dispatch(registerAction(firstName, lastName, email, password)),
        setPage: (page) => dispatch(setPage(page))
    };
}

export default connect(mapState, mapDispatch)(RegisterPage);