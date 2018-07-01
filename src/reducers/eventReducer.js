import {ADD_EVENT, FETCH_EVENTS, GET_EVENT, PARTICIPATE} from "../actions/actionTypes";

export function eventReducer(state = [], action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return action.data;
        case ADD_EVENT:
            let newState = state.slice();
            newState.push(action.data);
            return newState;
        case PARTICIPATE:
            let nextState = state.filter(e => e._id !== action.data._id);
            nextState.push(action.data);
            return nextState;
        default:
            return state;
    }
}