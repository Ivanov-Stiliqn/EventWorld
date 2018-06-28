import {FETCH_EVENTS, ADD_EVENT} from "./actionTypes";
import {renderEvents, addEvent, getEventsByCategory, getEventsFromSubscriptions} from "../api/service";
import toastr from "toastr";

function fetchEvents(data){
    return{
        type: FETCH_EVENTS,
        data: data
    }
}

function eventAdd(data){
    return{
        type: ADD_EVENT,
        data: data
    }
}

function renderEventsAction() {
    return (dispatch) => {
        return renderEvents()
            .then(json => {
                    dispatch(fetchEvents(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

function addEventAction(data){
    return (dispatch) => {
        return addEvent(data)
            .then(json => {
                    dispatch(eventAdd(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

function getEventsByCategoryAction(category){
    return (dispatch) => {
        return getEventsByCategory(category)
            .then(json => {
                    dispatch(fetchEvents(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

function getEventsFromSubscriptionsAction(subs) {
    return (dispatch) => {
        return getEventsFromSubscriptions(subs)
            .then(json => {
                    dispatch(fetchEvents(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

export {renderEventsAction, addEventAction, getEventsByCategoryAction, getEventsFromSubscriptionsAction}