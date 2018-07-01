import {ADD_COMMENT, FETCH_COMMENTS} from "../actions/actionTypes";

export function commentReducer(state = [], action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.data;
        case ADD_COMMENT:
            let newState = state.slice();
            newState.push(action.data);
            return newState;
        default:
            return state;
    }
}