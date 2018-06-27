import {SET_PAGE} from "./actionTypes";

function setPage(page) {
    return{
        type: SET_PAGE,
        page: page
    }
}

export {setPage};