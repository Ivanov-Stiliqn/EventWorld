import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_SktiCqRb7";
const kinveyAppSecret = "f83b7d6f00654d71998a981147a49b31";

// Creates the authentication header
export function makeAuth(type) {
    if(type === 'basic'){
        return 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret);
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let credentials = '';
    if(user === null){
       return 'Basic ' +  btoa('guest' + ':' + 'guest')
    }
    else{
        return 'Kinvey ' + user._kmd.authtoken;
    }
}

// Creates request object to kinvey
export function makeRequest(method, module, endpoint, auth) {
    let req = {
        method,
        url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
        headers: {
            'Authorization': makeAuth(auth)
        }
    };

    return req;
}

// Function to return GET promise
export function get(module, endpoint, auth) {
    return $.ajax(makeRequest('GET', module, endpoint, auth));
}

// Function to return POST promise
export function post(module, endpoint, auth, data) {
    let req = makeRequest('POST', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

export function update(module, endpoint, auth, data) {
    let req = makeRequest('PUT', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

// Function to return DELETE promise
export function remove(module, endpoint, auth) {
    return $.ajax(makeRequest('DELETE', module, endpoint, auth));
}
