import { userReducer, eventCreatorReducer } from './userReducer';
import { pageReducer } from './pageReducer';
import { categoryReducer } from './categoryReducer';
import { eventReducer } from './eventReducer';
import {commentReducer} from "./commentReducer";

export default {
    user: userReducer,
    page: pageReducer,
    categories: categoryReducer,
    events: eventReducer,
    creator: eventCreatorReducer,
    comments: commentReducer
};