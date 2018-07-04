import {
    LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT, AJAX_ERROR, SEED_USER, SUBSCRIBE,
    GET_EVENT_CREATOR
} from "../actions/actionTypes";
import toastr from 'toastr';

export function userReducer(state = {}, action) {
    switch (action.type) {
        case SUBSCRIBE:
            let newUser = action.user;
            localStorage.setItem('user', JSON.stringify(newUser));
            return newUser;
        case SEED_USER:
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            let user = action.user;
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        case LOGOUT:
            localStorage.clear();
            return {};
        case AJAX_ERROR:
            return state;
        default:
            return state;
    }
}

export function eventCreatorReducer(state = {}, action){
    switch(action.type){
        case GET_EVENT_CREATOR:
            return action.user;
        default:
            return state;
    }

}