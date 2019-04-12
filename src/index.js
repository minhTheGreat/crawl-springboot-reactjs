import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './Config/history';
import { Router } from 'react-router-dom';
import createStore from './reducers/configureStore';
import AppContainer from './containers/AppContainer';




const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <AppContainer/>
        </Router>
    </Provider>,
    document.querySelector("#root")

);

