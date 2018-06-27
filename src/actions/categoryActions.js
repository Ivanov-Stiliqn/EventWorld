import {FETCH_CATEGORIES, ADD_CATEGORY} from "./actionTypes";
import {renderCategories, addCategory} from "../api/service";
import toastr from "toastr";

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

function renderCategoriesAction() {
    return (dispatch) => {
        return renderCategories()
            .then(json => {
                    dispatch(fetchCateogires(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

function addCategoryAction(name, image){
    return (dispatch) => {
        return addCategory(name, image)
            .then(json => {
                    dispatch(categoryAdd(json));
                },
                error => {
                    console.log(error);
                    toastr.error(error.responseJSON.message);
                });
    };
}

export {renderCategoriesAction, addCategoryAction}