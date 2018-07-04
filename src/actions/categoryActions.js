import {FETCH_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY} from "./actionTypes";
import {renderCategories, addCategory, removeCategory} from "../api/service";
import toastr from "toastr";
import {ajax_error} from "./authActions";

function fetchCateogires(data){
    return{
        type: FETCH_CATEGORIES,
        data: data
    }
}

function categoryAdd(data){
    return{
        type: ADD_CATEGORY,
        data: data
    }
}

function deleteCategory(id){
    return{
        type: DELETE_CATEGORY,
        id: id
    }
}

function renderCategoriesAction() {
    return (dispatch) => {
        return renderCategories()
            .then(json => {
                    dispatch(fetchCateogires(json));
                },
                error => {
                    toastr.error(error.responseJSON.description);
                });
    };
}

function addCategoryAction(name, image){
    return (dispatch) => {
        return addCategory(name, image)
            .then(json => {
                    dispatch(categoryAdd(json));
                    toastr.success('Category added !');
                },
                error => {
                    dispatch(ajax_error());
                    toastr.error(error.responseJSON.description);
                });
    };
}

function deleteCategoryAction(id){
    return (dispatch) => {
        return removeCategory(id)
            .then(json => {
                    dispatch(deleteCategory(id));
                    toastr.success('Category removed !');
                },
                error => {
                    toastr.error(error.responseJSON.description);
                });
    };
}

export {renderCategoriesAction, addCategoryAction, deleteCategoryAction}