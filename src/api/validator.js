export function validateUser(username, password, repeatPass) {
    if (username.length < 5) {
        throw new Error('Username should be at least 5 symbols long.');
    }

    if (password !== repeatPass) {
        throw new Error('Passwords do not match.');
    }

    if (password === '') {
        throw new Error('Password should not be empty.');
    }
}

export function validateChirp(text) {
    if (text === '') {
        throw new Error('Chirp cannot be empty.');
    }

    if (text.length > 150) {
        throw new Error('Chirp should be less than 150 symbols long');
    }
}

