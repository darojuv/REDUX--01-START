import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Counter from './store/reducers/counter';
import Results from './store/reducers/results';

const rootReducer = combineReducers({
    ctr: Counter,
    res: Results
});

const logger = (store) =>{
    return next => {
        return action => {
            console.log('[Middleware] Dispatch action', action);
            const result = next(action);
            console.log('[Middleware] Next state ', store.getState());
            return result; 
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createdStore = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk))); //the second parameter is called enhancer
ReactDOM.render(<Provider store={createdStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();