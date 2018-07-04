export function validateRegister(email, password, repeatPass, firstName, lastName) {
    if (email.length < 5) {
        return 'Email should be at least 5 symbols long.';
    }

    if(email.indexOf('@') === -1){
        return 'Please enter valid email.'
    }

    if (password !== repeatPass) {
        return 'Passwords do not match.';
    }

    if (password.length < 3) {
        throw new Error('Password should be at least 3 symbols long.');
    }

    if(firstName === '' || lastName === ''){
        return 'Names should not be empty.';
    }

    return '';
}

export function validateLogin(email, password){
    if (email.length < 5) {
        return 'Email should be at least 5 symbols long.';
    }

    if(email.indexOf('@') === -1){
        return 'Please enter valid email.'
    }

    if (password.length < 3) {
        throw new Error('Password should be at least 3 symbols long.');
    }

    return '';
}

export function validateCateogry(name, image) {
    if (name === '') {
        return 'Category cannot be empty.';
    }

    if(!image.startsWith('http') && !image.startsWith('https')){
        return 'Image should be url.'
    }

    return '';
}

export function validateEvent(name, image, date, location, availablePlaces, description) {
    if (name === '') {
        return 'Event cannot be empty.';
    }

    if(!image.startsWith('http') && !image.startsWith('https')){
        return 'Image should be url.'
    }

    if (location === '') {
        return 'Location cannot be empty.';
    }

    if(isNaN(Number(availablePlaces))){
        return 'Total people should be number.'
    }

    if(Number(availablePlaces) < 1){
        return 'Total people should be at least 1'
    }

    if (description.length < 10) {
        return 'Description should be at least 10 symbols long.';
    }

    if(description.length > 1000){
        return 'Description should not exceed 100 symbols'
    }

    if(!isValidDate(date)){
        return 'Date is not valid!';
    }
    return '';
}

function isValidDate(dateString)
{
    if(!/^\d{4}-\d{1,2}-\d{1,2}$/.test(dateString))
    {
        return false;
    }


    let parts = dateString.split("-");
    let day = parseInt(parts[2], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[0], 10);

    if(year < 1000 || year > 3000 || month === 0 || month > 12){
        return false;
    }

    let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
        monthLength[1] = 29;

     if(day > 0 && day <= monthLength[month - 1]){
        return true;
     }

     return false;
}

