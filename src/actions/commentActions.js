import {ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS} from "./actionTypes";
import {addComment, removeComment, renderComments} from "../api/service";
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

function deleteComment(id) {
    return{
        type: DELETE_COMMENT,
        id: id
    }
}

function fetchCommentsAction(eventId) {
    return (dispatch) => {
        return renderComments(eventId)
            .then(json => {
                    dispatch(fetchComments(json));
                },
                error => {
                    toastr.error(error.responseJSON.description);
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
                    toastr.error(error.responseJSON.description);
                });
    };
}

function deleteCommentAction(id) {
    return (dispatch) => {
        return removeComment(id)
            .then(json => {
                    dispatch(deleteComment(id));
                    toastr.success('Comment deleted !');
                },
                error => {
                    toastr.error(error.responseJSON.description);
                });
    };
}

export {fetchCommentsAction, addCommentAction, deleteCommentAction}