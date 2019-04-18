import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authentication from '../reducers/authReducer';
import users from '../reducers/userReducer';
import itemEditing from '../reducers/itemEditingReducer';
import news from './newsReducer';
import category from './categoryReducer'
import sources from './sourceReducer'
const rootReducer=combineReducers({ 
    authentication,
    users,
    itemEditing,
    form:formReducer,
    sources,
    news,
    category
});
export default rootReducer;

    