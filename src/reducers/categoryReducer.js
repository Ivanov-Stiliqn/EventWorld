import {ADD_CATEGORY, DELETE_CATEGORY, FETCH_CATEGORIES} from "../actions/actionTypes";

export function categoryReducer(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.data;
        case ADD_CATEGORY:
            let newState = state.slice();
            newState.push(action.data);
            return newState;
        case DELETE_CATEGORY:
            return state.filter(e => e._id !== action.id);
        default:
            return state;
    }
}