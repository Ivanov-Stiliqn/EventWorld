import * as requester from './requester';

export function isAuthorized() {
        return localStorage.getItem('username') !== null;
    }

    // user/login
export function login(email, password) {
        let userData = {
            username: email,
            password
        };

        return requester.post('user', 'login', 'basic', userData);
    }

    // user/register
export function register(firstName, lastName, email, password) {
        let userData = {
            username: email,
            password,
            firstName,
            lastName,
            isAdmin: false,
            subscriptions: []
        };

        return requester.post('user', '', 'basic', userData);
    }

    // user/logout
export function logout() {
        let logoutData = {
            authtoken: localStorage.getItem('user').authtoken
        };

        return requester.post('user', '_logout', 'kinvey', logoutData);
    }