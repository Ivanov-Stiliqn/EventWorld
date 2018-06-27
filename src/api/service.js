import * as requester from './requester';

export function renderChirps(subscriptions) {
    let subs = JSON.stringify(subscriptions);
    return requester.get('appdata', `chirps?query={"author":{"$in": ${subs}}}&sort={"_kmd.ect": 1}`);
}

export function renderChirpsFromUser(username) {
    return requester.get('appdata', `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`);
}

export function getChirps(username) {
    return requester.get('appdata', `chirps?query={"author":"${username}"}`);
}

export function getFollowing(username) {
    return requester.get('user', `?query={"username":"${username}"}`);
}

export function getFollowers(username) {
    return requester.get('user', `?query={"subscriptions":"${username}"}`);
}

export function getStats(username) {
    return Promise.all([getChirps(username), getFollowing(username), getFollowers(username)]);
}

export function postChirp(text, author) {
    let data = {
        text,
        author
    };

    return requester.post('appdata', 'chirps', 'kinvey', data);
}

export function deleteChrip(id) {
    return requester.remove('appdata', 'chirps/' + id);
}

export function getUsers() {
    return requester.get('user', '');
}

export function subscribe(subscriptions) {
    let data = {
        subscriptions
    };

    return requester.update('user', localStorage.getItem('userId'), 'kinvey', data);
}

export function renderCategories(){
    return requester.get('appdata', 'categories')
}

export function addCategory(name, image){
    let data = {name, image};

    return requester.post('appdata', 'categories', 'kinvey', data);
}
