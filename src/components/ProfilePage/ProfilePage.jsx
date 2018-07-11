import React, {Component} from 'react';
import Input from '../common/Input';
import {connect} from 'react-redux';
import {registerAction, redirect, editProfileAction} from '../../actions/authActions';
import {Link} from 'react-router-dom';
import {setPage} from "../../actions/pageActions";
import toastr from 'toastr'
import {validateRegister} from "../../api/validator";
import ContactForm from "../common/ContactForm";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            profileImage: ''
        };

        this.onFileUpload = this.onFileUpload.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.props.setPage('Profile');
    }

    onFileUpload(url){
        this.setState({profileImage: url});
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler(e) {
        e.preventDefault();
        if(this.state.firstName === '' || this.state.lastName === ''){
            toastr.error('Names cannot be empty');
            return;
        }

        this.props.user.firstName = this.state.firstName;
        this.props.user.lastName = this.state.lastName;
        if(this.state.profileImage !== ''){
            this.props.user.profileImage = this.state.profileImage;
        }

        this.props.editProfile(this.props.user).then(() => {
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
                        <h3 className="tittle-w3ls three">{this.props.user.username}</h3>
                    </div>
                    <div className="inner_sec_info_wthree_agile">
                        <div className="signin-form">
                            <div className="login-form-rec">
                                <form onSubmit={this.onSubmitHandler}>
                                    <div>
                                        <img className='profileImage' src={this.props.user.profileImage}/>
                                    </div>
                                    <label>Profile Image: </label>
                                    <ContactForm updateParent={this.onFileUpload}/>
                                    <Input type="text" name="firstName" placeholder="First Name" label='First Name' value={this.state.firstName} onChange={this.onChangeHandler}/>
                                    <Input type="text" name="lastName" placeholder="Last Name"  label='Last Name' value={this.state.lastName} onChange={this.onChangeHandler}/>
                                    <input type="submit" value="Save Changes"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    return {
        redirect: state.redirect,
        user: state.user
    };
}

function mapDispatch(dispatch) {
    return {
        editProfile: (user) => dispatch(editProfileAction(user)),
        setPage: (page) => dispatch(setPage(page))
    };
}

export default connect(mapState, mapDispatch)(ProfilePage);