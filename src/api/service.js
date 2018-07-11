import * as requester from './requester';
import {fullDate, nextDay} from '../utilities/dateConverter';

export function subscribe(user) {
    return requester.update('user', user._id, 'kinvey', user);
}

export function renderCategories(){
    return requester.get('appdata', 'categories')
}

export function addCategory(name, image){
    let data = {name, image};

    return requester.post('appdata', 'categories', 'kinvey', data);
}

export function renderEvents(){
    return requester.get('appdata', `events?query={"date":{"$gte": "${fullDate(new Date(Date.now()))}"}}&sort={"_kmd.ect": -1}`)
}

export function getEventsByCategory(category) {
    return requester.get('appdata', `events?query={"date":{"$gte": "${fullDate(new Date(Date.now()))}"},"category": "${category}"}&sort={"_kmd.ect": -1}`)
}

export function getEventsFromSubscriptions(subscriptions) {
    let subs = JSON.stringify(subscriptions);
    return requester.get('appdata', `events?query={"category":{"$in": ${subs}}}&sort={"_kmd.ect": -1}`);
}

export function addEvent(data){
    return requester.post('appdata', 'events', 'kinvey', data);
}

export function getEventCreator(userId){
    return requester.get('user', userId);
}

export function participate(event){
    return requester.update('appdata', 'events/' + event._id, 'kinvey' ,event);
}

export function renderComments(eventId){
    return requester.get('appdata', `comments?query={"eventId":"${eventId}"}&sort={"_kmd.ect": 1}`);
}

export function addComment(comment) {
    return requester.post('appdata', 'comments', 'kinvey', comment);
}

export function removeCategory(id) {
    return requester.remove('appdata', 'categories/' + id);
}

export function removeComment(id) {
    return requester.remove('appdata', 'comments/' + id);
}

export function removeEvent(id) {
    return requester.remove('appdata', 'events/' + id);
}

export function removeCommentsForEvent(eventId) {
    return requester.remove('appdata', `comments?query={"eventId":"${eventId}"}`);
}

export function editEvent(event) {
    return requester.update('appdata', 'events/' + event._id, 'kinvey', event);
}

export function upcommingEvents(userId){
    return requester.get('appdata', `events?query={"date": "${nextDay(new Date(Date.now()))}","usersGoing": "${userId}"}`)
}


export function getNotifications(userId) {
    return requester.get('appdata', `notifications?query={"user":"${userId}"}`);
}

export function addNotification(notification){
    return requester.post('appdata', 'notifications', 'kinvey', notification);
}

export function getEventById(eventId){
    return requester.get('appdata', 'events/' + eventId);
}

export function removeNotification(notification, userId){
    notification.user = notification.user.filter(u => u !== userId);
    return requester.update('appdata', 'notifications/' + notification._id, 'kinvey', notification);
}

export function editProfile(user) {
    return requester.update('user', user._id, 'kinvey', user);
}