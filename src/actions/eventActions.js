import {
    FETCH_EVENTS, ADD_EVENT, SUBSCRIBE, GET_EVENT_CREATOR, PARTICIPATE,
    DELETE_EVENT, EDIT_EVENT
} from "./actionTypes";
import {
    renderEvents, addEvent, getEventsByCategory, getEventsFromSubscriptions, subscribe, getEventCreator,
    participate, removeEvent, removeCommentsForEvent, editEvent
} from "../api/service";
import toastr from "toastr";
import {ajax_error} from "./authActions";

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

function deleteEvent(id) {
    return{
        type: DELETE_EVENT,
        id: id
    }
}

function eventEdit(data){
    return{
        type: EDIT_EVENT,
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
                    toastr.error(error.responseJSON.description);
                });
    };
}

function addEventAction(data){
    return (dispatch) => {
        return addEvent(data)
            .then(json => {
                    dispatch(eventAdd(json));
                    toastr.success('Event added !');
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
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
                    toastr.error(error.responseJSON.description);
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
                    toastr.error(error.responseJSON.description);
                });
    };
}

function subscribeAction(type, category, user){
    let message = '';

    if(type === 'subscribe'){
        if(user.subscriptions === undefined){
            user.subscriptions = [];
        }
        user.subscriptions.push(category);
        message = `Subscribed to category ${category}`;
    }
    else{
        user.subscriptions = user.subscriptions.filter(s => s !== category);
        message = `Unsubscribed from category ${category}`;
    }

    return (dispatch) => {
        return subscribe(user)
            .then(json => {
                    dispatch(subscribeUnsubscribe(json));
                    toastr.success(message);
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
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
                    toastr.error(error.responseJSON.description);
                });
    };
}

function participateInEventAction(event, userId, type) {
    let message = '';

    if(type === 'participate'){
        if(event.usersGoing === undefined){
            event.usersGoing = [];
        }

        event.usersGoing.push(userId);
        message = toastr.success('Wohhoooo you have found your event!');
    }
    else{
        event.usersGoing = event.usersGoing.filter(u => u !== userId);
        message = toastr.success('Cancel participation confirmed!');
    }

    return (dispatch) => {
        return participate(event)
            .then(json => {
                    dispatch(participateInEvent(json));
                    toastr.success(message);
                },
                error => {
                    toastr.error(error.responseJSON.description);
                });
    };
}

function deleteEventAction(id) {
    return (dispatch) => {
        return Promise.all([removeEvent(id), removeCommentsForEvent(id)])
            .then(json => {
                    dispatch(deleteEvent(id));
                    toastr.success('Event deleted !');
                },
                error => {
                    toastr.error(error.responseJSON.description);
                });
    };
}

function editEventAction(event){
    return (dispatch) => {
        return editEvent(event)
            .then(json => {
                    dispatch(eventEdit(json));
                    toastr.success('Event edited !');
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
                });
    };
}

export {
    renderEventsAction,
    addEventAction,
    getEventsByCategoryAction,
    getEventsFromSubscriptionsAction,
    subscribeAction,
    getEventCreatorAction,
    participateInEventAction,
    deleteEventAction,
    editEventAction
}