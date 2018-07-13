import { GET_NOTIFICATIONS, REMOVE_NOTIFICATION} from "../actions/actionTypes";

export function notificationReducer(state = [], action) {
    switch (action.type){
        case GET_NOTIFICATIONS:
            let [comments, events] = [...action.data];
            let commentNotifications = comments.map(c => {
                return {
                    _id: c._id,
                    content: c.content,
                    event: c.event,
                    user: c.user
                }
            });

            let eventsNotification = events.map(e => {
                return {
                    content: `You have an event for tomorrow: ${e.name}`,
                    event: e._id
                }
            });

            return eventsNotification.concat(commentNotifications);
        case REMOVE_NOTIFICATION:
            return state.filter(n => n._id !== action.data._id);
        default: return state;
    }
}