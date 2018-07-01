import {FETCH_EVENTS, ADD_EVENT, SUBSCRIBE, GET_EVENT, GET_EVENT_CREATOR, PARTICIPATE} from "./actionTypes";
import {renderEvents, addEvent, getEventsByCategory, getEventsFromSubscriptions, subscribe, getEventCreator, participate} from "../api/service";
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

function subscribeUnsubscribe(data){
    return{
        type: SUBSCRIBE,
        user: data
    }
}

function eventCreator(data){
    return{
        type: GET_EVENT_CREATOR,
        user: data
    }
}

function participateInEvent(data) {
    return{
        type: PARTICIPATE,
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

function subscribeAction(type, category, user){
    if(type === 'subscribe'){
        if(user.subscriptions === undefined){
            user.subscriptions = [];
        }
        user.subscriptions.push(category);
    }
    else{
        user.subscriptions = user.subscriptions.filter(s => s !== category);
    }

    return (dispatch) => {
        return subscribe(user)
            .then(json => {
                    dispatch(subscribeUnsubscribe(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

function getEventCreatorAction(userId){
    return (dispatch) => {
        return getEventCreator(userId)
            .then(json => {
                    dispatch(eventCreator(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

function participateInEventAction(event, userId, type) {
    if(type === 'participate'){
        if(event.usersGoing === undefined){
            event.usersGoing = [];
        }

        event.usersGoing.push(userId);
    }
    else{
        event.usersGoing = event.usersGoing.filter(u => u !== userId);
    }

    return (dispatch) => {
        return participate(event)
            .then(json => {
                    dispatch(participateInEvent(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}
export {renderEventsAction, addEventAction, getEventsByCategoryAction, getEventsFromSubscriptionsAction, subscribeAction, getEventCreatorAction, participateInEventAction}