import {REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT} from '../actions/actionTypes';
import {login, register} from '../api/auth';
import {AJAX_ERROR, SEED_USER} from "./actionTypes";
import toastr from 'toastr'

function registerSuccess(user) {
    return {
        type: REGISTER_SUCCESS,
        user: user
    };
}

function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user: user
    };
}

export function logoutSuccess() {
    return {
        type: LOGOUT,
    }
}

export function ajax_error() {
    return{
        type: AJAX_ERROR
    }
}

export function seedUser(user){
    return{
        type: SEED_USER,
        user: user
    }
}

function seedUserAction() {
    return (dispatch) => {
        let user = localStorage.getItem('user');
        console.log(user === null);
        if(user !== null){
            dispatch(seedUser(JSON.parse(user)));
        }
    };

}

function registerAction(firstName, lastName, email, password) {
    return (dispatch) => {
        return register(firstName, lastName, email, password)
            .then(json => {
                    dispatch(registerSuccess(json));
                },
                error => {
                    toastr.error(error);
                    dispatch(ajax_error());
                });
    };
}

function loginAction(email, password) {
    return (dispatch) => {
        return login(email, password)
            .then(json => {
                dispatch(loginSuccess(json));
            },
                error => {
                    toastr.error(error);
                    dispatch(ajax_error())
                });
    };
}

function logoutAction() {
    return (dispatch) => {
        dispatch(logoutSuccess())
    };
}

export {registerAction, loginAction, logoutAction, seedUserAction};