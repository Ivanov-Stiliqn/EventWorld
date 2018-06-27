import {ADD_CATEGORY, FETCH_CATEGORIES} from "../actions/actionTypes";

export function categoryReducer(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.data;
        case ADD_CATEGORY:
            let newState = state.slice();
            newState.push(action.data);
            return newState;
        default:
            return state;
    }
}