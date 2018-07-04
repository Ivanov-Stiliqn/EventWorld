import {ADD_EVENT, DELETE_EVENT, EDIT_EVENT, FETCH_EVENTS, PARTICIPATE} from "../actions/actionTypes";

export function eventReducer(state = [], action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return action.data;
        case ADD_EVENT:
            let newState = state.slice();
            newState.push(action.data);
            return newState;
        case EDIT_EVENT:
        case PARTICIPATE:
            let nextState = state.filter(e => e._id !== action.data._id);
            nextState.push(action.data);
            return nextState;
        case DELETE_EVENT:
            return state.filter(e => e._id !== action.id);
        default:
            return state;
    }
}