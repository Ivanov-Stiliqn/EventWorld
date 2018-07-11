import * as requester from './requester';
const defaultProfileImage = 'http://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg';

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
export function register(data) {
        let profileImage = data.profileImage;
        if(data.profileImage === ''){
            profileImage = defaultProfileImage;
        }

        let userData = {
            username: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            isAdmin: false,
            subscriptions: [],
            profileImage
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