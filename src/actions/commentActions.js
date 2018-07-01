import {ADD_COMMENT, FETCH_COMMENTS} from "./actionTypes";
import {addComment, renderComments} from "../api/service";
import toastr from "toastr";


function fetchComments(data) {
    return{
        type: FETCH_COMMENTS,
        data: data
    }
}

function commentAdd(data) {
    return{
        type: ADD_COMMENT,
        data: data
    }
}

function fetchCommentsAction(eventId) {
    return (dispatch) => {
        return renderComments(eventId)
            .then(json => {
                    dispatch(fetchComments(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

function addCommentAction(comment) {
    return (dispatch) => {
        return addComment(comment)
            .then(json => {
                    dispatch(commentAdd(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

export {fetchCommentsAction, addCommentAction}