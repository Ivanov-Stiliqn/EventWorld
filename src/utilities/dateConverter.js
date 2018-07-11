export function fullDate(date){
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
        ('0' + date.getDate()).slice(-2);
}

export function nextDay(today){
    let date = new Date();
    date.setDate(today.getDate() + 1);

    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
        ('0' + date.getDate()).slice(-2);
}