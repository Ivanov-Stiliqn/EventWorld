import {SET_PAGE} from "../actions/actionTypes";

export function pageReducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE:
            return action.page;
        default:
            return state;
    }
}