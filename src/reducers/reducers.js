import { userReducer } from './userReducer';
import { pageReducer } from './pageReducer';
import { categoryReducer } from './categoryReducer';
import { eventReducer } from './eventReducer';

export default {
    user: userReducer,
    page: pageReducer,
    categories: categoryReducer,
    events: eventReducer
};