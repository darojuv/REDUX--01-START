const redux = require('redux');

const initialState = {counter:0};

const rootReducer = function(state = initialState, action){
    return state;
}

const store = redux.createStore(rootReducer );
console.log(store.getState());