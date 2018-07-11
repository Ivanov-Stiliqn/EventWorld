import {REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT} from '../actions/actionTypes';
import {login, register} from '../api/auth';
import {AJAX_ERROR, EDIT_PROFILE, SEED_USER} from "./actionTypes";
import toastr from 'toastr'
import {getNotificationsAction} from "./notificationActions";
import {editProfile} from "../api/service";

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
    return {
        type: AJAX_ERROR
    }
}

export function seedUser(user) {
    return {
        type: SEED_USER,
        user: user
    }
}

function profileEdit(user) {
    return {
        type: EDIT_PROFILE,
        user: user
    }
}

function editProfileAction(user) {
    return (dispatch) => {
        return editProfile(user)
            .then(json => {
                    dispatch(profileEdit(json));
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
                });
    };
}


function seedUserAction() {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
            let json = localStorage.getItem('user');
            if (json !== null) {
                let user = JSON.parse(json);
                dispatch(seedUser(user));
                toastr.success(`Welcome ${user.firstName}`);
                resolve(user);
            }
            else {
                reject({});
            }
        });
    };
}

function registerAction(firstName, lastName, email, password) {
    return (dispatch) => {
        return register(firstName, lastName, email, password)
            .then(json => {
                    dispatch(registerSuccess(json));
                    toastr.success(`Welcome ${json.firstName}`);
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
                });
    };
}

function loginAction(email, password) {
    return (dispatch) => {
        return login(email, password)
            .then(json => {
                    dispatch(loginSuccess(json));
                    toastr.success(`Welcome ${json.firstName}`);
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
                });
    };
}

function logoutAction() {
    return (dispatch) => {
        dispatch(logoutSuccess());
        toastr.success('See you soon! Logout successful.');
    };
}

export {registerAction, loginAction, logoutAction, seedUserAction, editProfileAction};