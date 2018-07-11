import {
    ADD_CATEGORY, ADD_EVENT, AJAX_ERROR, EDIT_EVENT, EDIT_PROFILE, LOGIN_SUCCESS, REGISTER_SUCCESS,
    SUBSCRIBE
} from "../actions/actionTypes";

export function redirectReducer(state = '', action) {
    switch(action.type){
        case ADD_CATEGORY:
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case EDIT_PROFILE:
            return '/';
        case ADD_EVENT:
        case EDIT_EVENT:
        case SUBSCRIBE:
            return '/all/1';
        case AJAX_ERROR:
            return '';
        default: return state;
    }
}