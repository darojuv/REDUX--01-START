import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Counter from './store/reducers/counter';
import Results from './store/reducers/results';

const rootReducer = combineReducers({
    ctr: Counter,
    res: Results
});

const createdStore = createStore(rootReducer);

ReactDOM.render(<Provider store={createdStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
