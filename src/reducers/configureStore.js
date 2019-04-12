import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {createStore,applyMiddleware} from 'redux';

import rootReducer from './index';

const middleware = applyMiddleware(thunk);

export default function configureStore(){
    return createStore(rootReducer,middleware);
}