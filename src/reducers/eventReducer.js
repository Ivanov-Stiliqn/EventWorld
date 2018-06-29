import {ADD_EVENT, FETCH_EVENTS, GET_EVENT} from "../actions/actionTypes";

export function eventReducer(state = [], action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return action.data;
        case ADD_EVENT:
            let newState = state.slice();
            newState.push(action.data);
            return newState;
        default:
            return state;
    }
}