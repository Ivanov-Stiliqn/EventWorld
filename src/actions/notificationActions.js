import { GET_NOTIFICATIONS, REMOVE_NOTIFICATION} from "./actionTypes";
import {addNotification, getNotifications, removeNotification, upcommingEvents} from "../api/service";
import {ajax_error} from "./authActions";
import toastr from "toastr";

function renderNotifications(data){
    return {
        type: GET_NOTIFICATIONS,
        data: data
    }
}

function notificationRemove(data){
    return {
        type: REMOVE_NOTIFICATION,
        data: data
    }
}

function getNotificationsAction(userId){
    return (dispatch) => {
        return Promise.all([getNotifications(userId), upcommingEvents(userId)])
            .then(json => {
                    dispatch(renderNotifications(json));
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
                });
    };
}

function addNotificationAction(notification){
    return (dispatch) => {
        return addNotification(notification)
            .then(json => {
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
                });
    };
}

function removeNotificationAction(notification, userId){
    return (dispatch) => {
        if(notification._id !== undefined){
            return removeNotification(notification, userId)
                .then(json => {
                        dispatch(notificationRemove(notification))
                    },
                    error => {
                        dispatch(ajax_error());
                        toastr.error(error.responseJSON.description);
                    });
        }
        else{
            dispatch(notificationRemove(notification))
        }
    }
}

export {getNotificationsAction, addNotificationAction, removeNotificationAction}