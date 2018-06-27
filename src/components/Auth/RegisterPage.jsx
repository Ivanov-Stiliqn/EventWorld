import React, {Component} from 'react';
import Input from '../common/Input';
import {connect} from 'react-redux';
import {registerAction, redirect} from '../../actions/authActions';
import {Link} from 'react-router-dom';
import {setPage} from "../../actions/pageActions";
import toastr from 'toastr'

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
        if(this.state.password !== this.state.repeat){
            toastr.error('Passwords do not match!');
            return;
        }

        this.props.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
        this.props.history.push('/');
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
                                    <Input type="text" name="firstName" placeholder="First Name" required="" value={this.state.firstName} onChange={this.onChangeHandler}/>
                                    <Input type="text" name="lastName" placeholder="Last Name" required="" value={this.state.lastName} onChange={this.onChangeHandler}/>
                                    <Input type="email" name="email" placeholder="Email" required="" value={this.state.email} onChange={this.onChangeHandler}/>
                                    <Input type="password" name="password" id="password1" placeholder="Password"
                                           required="" value={this.state.password} onChange={this.onChangeHandler}/>
                                    <Input type="password" name="repeat" id="password2"
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

function mapState() {
    return {};
}

function mapDispatch(dispatch) {
    return {
        register: (firstName, lastName, email, password) => dispatch(registerAction(firstName, lastName, email, password)),
        setPage: (page) => dispatch(setPage(page))
    };
}

export default connect(mapState, mapDispatch)(RegisterPage);